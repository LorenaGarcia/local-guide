import { LocalEvent } from "@/types";
import { MONTH_MAP } from "@/constants";

function getMappedEvents(
  cards: any[],
  relsMap: Map<string, { slug: string; category?: string }>
): LocalEvent[] {
  if (!cards || !Array.isArray(cards)) return [];

  return cards
    .filter((card: any) => card && card.component === "Event card")
    .map((card: any) => {
      let month = "ENE";
      let day = "01";
      let finalTimeStr = "18:00";

      if (card.date && typeof card.date === "string") {
        try {
          const [datePart, timePart] = card.date.split(" ");
          if (datePart) {
            const parts = datePart.split("-");
            if (parts.length === 3) {
              const year = parseInt(parts[0]);
              const monthIndex = parseInt(parts[1]) - 1;
              const dayNum = parseInt(parts[2]);
              const d = new Date(year, monthIndex, dayNum);
              month = d
                .toLocaleString("es-ES", { month: "short" })
                .toUpperCase()
                .replace(".", "");
              day = dayNum.toString().padStart(2, "0");
            }
          }
          if (timePart) {
            finalTimeStr = timePart;
          }
        } catch (e) {
          console.warn("Error parsing date:", card.date, e);
        }
      }

      let linkDetailUuid = "";
      let resolvedSlug = "";
      let resolvedCategory = "";

      if (card.link_detail) {
        if (typeof card.link_detail === "string") {
          linkDetailUuid = card.link_detail;
        } else if (
          typeof card.link_detail === "object" &&
          card.link_detail !== null
        ) {
          linkDetailUuid = card.link_detail.uuid || "";
          resolvedSlug =
            card.link_detail.full_slug || card.link_detail.slug || "";
          const detailBlok =
            card.link_detail.content?.body?.[0] ||
            card.link_detail.content ||
            {};
          resolvedCategory = detailBlok.category || "";
        }
      }

      let eventId = linkDetailUuid || card._uid;

      if (resolvedSlug) {
        eventId = resolvedSlug.replace("eventos/", "");
      } else if (linkDetailUuid) {
        const relationData = relsMap.get(linkDetailUuid);
        if (relationData) {
          eventId = relationData.slug;
          if (!resolvedCategory && relationData.category) {
            resolvedCategory = relationData.category;
          }
        }
      }

      if (typeof eventId !== "string") {
        eventId = card._uid || String(Math.random());
      }

      let category = "Bazares locales";
      if (resolvedCategory) {
        category = resolvedCategory;
      } else if (
        card.title.toLowerCase().includes("gastronó") ||
        card.title.toLowerCase().includes("sabor")
      ) {
        category = "Gastronomía";
      } else if (
        card.title.toLowerCase().includes("música") ||
        card.title.toLowerCase().includes("concierto") ||
        card.title.toLowerCase().includes("ritmo")
      ) {
        category = "Música en vivo";
      } else if (
        card.title.toLowerCase().includes("arte") ||
        card.title.toLowerCase().includes("acuarela") ||
        card.title.toLowerCase().includes("cerámica")
      ) {
        category = "Arte y artesanía";
      }

      return {
        id: eventId,
        title: card.title || "",
        description: card.description || "",
        image:
          typeof card.image === "object"
            ? card.image?.filename || ""
            : card.image || "",
        date: card.date || "",
        month: month,
        day: day,
        time: finalTimeStr,
        locationName: card.address || "Pabellón Central",
        category: category,
      };
    });
}

function getFilteredEvents(
  events: LocalEvent[],
  selectedCategory: string,
  dateRange: { start: Date | null; end: Date | null }
): LocalEvent[] {
  return events.filter((event) => {
    const categoryMatch =
      selectedCategory === "Todos" ||
      event.category.toLowerCase() === selectedCategory.toLowerCase();

    let dateMatch = true;
    if (dateRange.start) {
      let eventDate: Date;
      if (event.date) {
        const parts = event.date.split(" ")[0].split("-");
        if (parts.length === 3) {
          eventDate = new Date(
            parseInt(parts[0]),
            parseInt(parts[1]) - 1,
            parseInt(parts[2])
          );
        } else {
          const currentYear = new Date().getFullYear();
          eventDate = new Date(
            currentYear,
            MONTH_MAP[event.month] || 0,
            parseInt(event.day)
          );
        }
      } else {
        const currentYear = new Date().getFullYear();
        eventDate = new Date(
          currentYear,
          MONTH_MAP[event.month] || 0,
          parseInt(event.day)
        );
      }

      eventDate.setHours(0, 0, 0, 0);

      if (dateRange.end) {
        const startDate = new Date(dateRange.start);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(dateRange.end);
        endDate.setHours(23, 59, 59, 999);
        dateMatch = eventDate >= startDate && eventDate <= endDate;
      } else {
        const startDate = new Date(dateRange.start);
        startDate.setHours(0, 0, 0, 0);
        dateMatch = eventDate.getTime() === startDate.getTime();
      }
    }

    return categoryMatch && dateMatch;
  });
}

export { getMappedEvents, getFilteredEvents };
