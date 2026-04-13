import { EventBlok } from "./upcoming-events.types";

function getEvents(eventBloks?: EventBlok[]) {
    return eventBloks?.length
    ? eventBloks.map((b) => {
        let month = "";
        let day = "";
        let startTimeStr = "";
        let endTimeStr = "";

        try {
          if (b.date && typeof b.date === "string") {
            const d = new Date(b.date);
            if (!isNaN(d.getTime())) {
              month = d
                .toLocaleString("es-ES", { month: "short" })
                .toUpperCase()
                .replace(".", "");
              day = d.getDate().toString().padStart(2, "0");
              if (b.date.includes(" ")) {
                startTimeStr = d.toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                });
              }
            } else {
              startTimeStr = b.date;
            }
          }

          if (b.time && typeof b.time === "string") {
            const d = new Date(b.time);
            if (!isNaN(d.getTime())) {
              if (b.time.includes(" ")) {
                endTimeStr = d.toLocaleTimeString("es-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                });
              }
            } else {
              endTimeStr = b.time;
            }
          }
        } catch (e) {
          console.warn("Could not parse dates for event", b.title);
        }

        let finalTimeStr = "";
        if (startTimeStr && endTimeStr) {
          finalTimeStr = `${startTimeStr} - ${endTimeStr} hrs`;
        } else if (startTimeStr) {
          finalTimeStr = `${startTimeStr} hrs`;
        } else if (endTimeStr) {
          finalTimeStr = endTimeStr;
        }

        return {
          id: b._uid,
          title: b.title || "",
          month: month,
          day: day,
          time: finalTimeStr,
          locationName: b.address || "",
          blok: b,
        };
      })
    : [];
}

export { getEvents };