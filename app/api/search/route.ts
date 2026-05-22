import { NextResponse } from "next/server";
import { getStoryblokApi } from "@storyblok/react/rsc";
import { fetchStory } from "@/lib/storyblok";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") || "";
  const l = searchParams.get("l") || "";

  const normalizedQuery = q.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const normalizedLocation = l.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  try {
    // 1. Obtener negocios de Storyblok a partir de la historia única "business_page"
    const businessPageStory = await fetchStory("business_page");
    const businessBloks = businessPageStory?.content?.body || [];

    const mappedBusinesses = businessBloks
      .filter((b: any) => b.is_active || b.is_active === undefined)
      .map((b: any) => {
        let targetUrl = undefined;
        
        if (b.link_detail && typeof b.link_detail === 'object' && b.link_detail.full_slug) {
          const slug = b.link_detail.full_slug;
          targetUrl = slug.startsWith('business/') ? `/${slug}` : `/business/${slug.replace(/^\//, '')}`;
        } else if (b.link_detail?.cached_url) {
          const slug = b.link_detail.cached_url;
          targetUrl = slug.startsWith('business/') ? `/${slug}` : `/business/${slug.replace(/^\//, '')}`;
        } else if (typeof b.link_detail === 'string' && b.link_detail.trim() !== '') {
          targetUrl = `/business/${b.link_detail}`; 
        }

        return {
          id: b._uid,
          name: b.name || "",
          description: b.description || "",
          image: b.image?.filename || b.image || "",
          tags: b.tags || [],
          address: b.address || "",
          url: targetUrl || `/business/${b._uid}`,
        };
      });

    // Filtrar los negocios en memoria
    let filteredBusinesses = mappedBusinesses;
    if (q) {
      filteredBusinesses = filteredBusinesses.filter((biz: any) => 
        (biz.name && biz.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(normalizedQuery)) ||
        (biz.description && biz.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(normalizedQuery)) ||
        (biz.tags && biz.tags.some((tag: string) => tag.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(normalizedQuery)))
      );
    }
    if (l) {
      filteredBusinesses = filteredBusinesses.filter((biz: any) => 
        biz.address && biz.address.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(normalizedLocation)
      );
    }

    // 2. Obtener eventos de Storyblok
    const storyblokApi = getStoryblokApi();
    const eventParams: any = {
      version: "draft",
      starts_with: "eventos/",
    };
    if (q) {
      eventParams.search_term = q;
    }

    const { data: eventData } = await storyblokApi.get("cdn/stories", eventParams);

    const mappedEvents = (eventData.stories || []).map((story: any) => {
      const blok = story.content.body?.[0] || story.content || {};
      
      // Parsear fecha para obtener día y mes
      let month = "";
      let day = "";
      let finalTimeStr = blok.schedule || blok.time || "18:00";

      try {
        const dateStr = blok.time || blok.date || "";
        if (dateStr && typeof dateStr === "string") {
          const d = new Date(dateStr.replace(" ", "T"));
          if (!isNaN(d.getTime())) {
            month = d
              .toLocaleString("es-ES", { month: "short" })
              .toUpperCase()
              .replace(".", "");
            day = d.getDate().toString().padStart(2, "0");
          }
        }
      } catch (e) {
        console.warn("Could not parse dates for event", story.name);
      }

      return {
        id: story.slug || story.uuid,
        title: blok.title || story.name || "",
        description: blok.description || "",
        image:
          blok.banner?.filename ||
          blok.banner ||
          blok.image?.filename ||
          blok.image ||
          "https://www.bkkkids.com/wp-content/uploads/2021/03/The-Neon-Night-Bazaar.jpg",
        date: blok.date || "",
        month: month,
        day: day,
        time: finalTimeStr,
        locationName: blok.address || blok.locationName || "Pabellón Central",
        locationAddress: blok.locationAddress || blok.address || "",
        category: blok.category || "Eventos",
      };
    });

    // Filtrar los eventos en memoria por ubicación si se proporciona
    let filteredEvents = mappedEvents;
    if (l) {
      filteredEvents = filteredEvents.filter((ev: any) => 
        (ev.locationName && ev.locationName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(normalizedLocation)) ||
        (ev.locationAddress && ev.locationAddress.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(normalizedLocation))
      );
    }

    return NextResponse.json({
      businesses: filteredBusinesses,
      events: filteredEvents,
    });
  } catch (error) {
    console.error("Search error in API route:", error);
    return NextResponse.json({ businesses: [], events: [] }, { status: 500 });
  }
}
