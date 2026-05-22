import { EventBlok } from "./upcoming-events.types";

function getEvents(eventBloks?: EventBlok[]) {
  return eventBloks?.length
    ? eventBloks.map((b) => {
      let month = "";
      let day = "";
      let finalTimeStr = "";

      try {
        const dateStr = b.time || b.date || "";
        if (dateStr && typeof dateStr === "string") {
          const d = new Date(dateStr.replace(" ", "T"));
          if (!isNaN(d.getTime())) {
            month = d
              .toLocaleString("es-ES", { month: "short" })
              .toUpperCase()
              .replace(".", "");
            day = d.getDate().toString().padStart(2, "0");

            if (dateStr.includes(" ")) {
              finalTimeStr =
                d.toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                }) + " hrs";
            }
          } else {
            finalTimeStr = dateStr;
          }
        }
      } catch (e) {
        console.warn("Could not parse dates for event", b.title);
      }

      let linkUrl = "";
      if (b.link_detail) {
        if (typeof b.link_detail === "string") {
          linkUrl = `/eventos/${b.link_detail}`;
        } else if (typeof b.link_detail === "object") {
          let storyUrl =
            b.link_detail.full_slug ||
            b.link_detail.slug ||
            b.link_detail.url ||
            b.link_detail.cached_url ||
            "";
          if (storyUrl) {
            // Ensure Storyblok event route always uses the Spanish 'eventos/' prefix
            if (storyUrl.startsWith("events/")) {
              storyUrl = storyUrl.replace("events/", "eventos/");
            } else if (!storyUrl.startsWith("eventos/") && !storyUrl.startsWith("http") && !storyUrl.startsWith("/")) {
              storyUrl = `eventos/${storyUrl}`;
            }
            linkUrl =
              storyUrl.startsWith("http") || storyUrl.startsWith("/")
                ? storyUrl
                : `/${storyUrl}`;
          }
        }
      }

      return {
        id: b._uid,
        title: b.title || b.Title || "",
        month: month,
        day: day,
        time: finalTimeStr,
        locationName: b.address || "",
        linkDetail: linkUrl,
        blok: b,
      };
    })
    : [];
}

export { getEvents };
