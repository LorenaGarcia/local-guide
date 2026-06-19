import { StoryblokActivity, EventBlok, EventStory, MappedEventData } from "./event-detail.types";
import { MONTHS, DAYS_SHORT } from "./event-detail.constants";


function getFormatEventDate(dateStr: string) {
    if (!dateStr) return "";
    try {
        const date = new Date(dateStr.replace(" ", "T"));
        if (isNaN(date.getTime())) return dateStr;



        const dayName = DAYS_SHORT[date.getDay()];
        const dayNum = date.getDate();
        const monthName = MONTHS[date.getMonth()];

        return `${dayName}, ${dayNum} ${monthName}`;
    } catch (e) {
        return dateStr;
    }
}

function getEventData(blok: EventBlok, story: EventStory): MappedEventData {
    const organizerData =
        Array.isArray(blok.organizer) && blok.organizer.length > 0
            ? blok.organizer[0]
            : null;
    const socialLinks =
        Array.isArray(organizerData?.social_links) &&
            organizerData.social_links.length > 0
            ? organizerData.social_links[0]
            : null;

    const eventData: MappedEventData = {
        title: blok.title || story.name || "",
        date: getFormatEventDate(blok.date || "") || blok.date || "",
        time: blok.schedule || blok.time || "",
        locationName: blok.address || "",
        locationAddress:
            blok.locationAddress ||
            blok.address ||
            "",
        category: blok.category || "",
        image:
            (blok.banner && typeof blok.banner === "object"
                ? blok.banner.filename
                : blok.banner) ||
            (blok.image && typeof blok.image === "object"
                ? blok.image.filename
                : blok.image) ||
            "",
        isTrending: blok.is_trending || blok.isTrending || false,
        isFeatured: blok.is_featured || blok.isFeatured || false,
        description: blok.description || "",
        fullDescription: blok.description || blok.fullDescription || "",
        price: blok.price || "",
        organizer: organizerData
            ? {
                name: organizerData.name || "",
                image:
                    (organizerData.image && typeof organizerData.image === "object"
                        ? organizerData.image.filename
                        : organizerData.image) ||
                    "",
                webUrl: (typeof socialLinks?.web === "object" ? socialLinks?.web?.url : socialLinks?.web) || null,
                email: socialLinks?.email || null,
            }
            : null,
        activities: Array.isArray(blok.activities)
            ? blok.activities.map((act: StoryblokActivity) => ({
                icon:
                    (act.icon && typeof act.icon === "object"
                        ? act.icon.filename
                        : act.icon) || "",
                title: act.title || "",
                description: act.description || "",
            }))
            : [],
        usefulInfo: Array.isArray(blok.useful_Info)
            ? blok.useful_Info
            : Array.isArray(blok.usefulInfo)
                ? blok.usefulInfo
                : [],
    };

    return eventData;
}

export { getFormatEventDate, getEventData }