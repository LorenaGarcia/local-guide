import { useState, useEffect } from "react";
import { getStoryblokApi, ISbStoryData } from "@storyblok/react/rsc";
import { LocalEvent } from "@/types";
import { getMappedEvents } from "@/components/event-list/event-list.utils";

export function useGetEventList() {
  const [events, setEvents] = useState<LocalEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      try {
        const storyblokApi = getStoryblokApi();
        const response = await storyblokApi.get("cdn/stories/events_page", {
          version: "draft",
          resolve_relations: "Event card.link_detail",
        });

        const relsMap = new Map<string, { slug: string; category?: string }>();

        if (response.data.rels) {
          response.data.rels.forEach((rel: ISbStoryData) => {
            const slug = rel.full_slug
              ? rel.full_slug.replace("eventos/", "")
              : rel.slug;
            const resolvedBlok = rel.content?.body?.[0] || rel.content || {};
            relsMap.set(rel.uuid, {
              slug,
              category: (resolvedBlok as any).category,
            });
          });
        }

        const cards = response.data.story?.content?.body || [];
        const mappedEvents = getMappedEvents(cards, relsMap);

        setEvents(mappedEvents);
      } catch (error) {
        console.error("Error loading events from Storyblok:", error);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  return { events, loading };
}
