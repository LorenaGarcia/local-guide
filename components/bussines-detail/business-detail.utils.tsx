import { COMPANYS_SOCIAL_MEDIA } from "@/constants";
import {
    SocialMediaLinks,
    BusinessDetailBlok,
    StoryblokImage,
} from "./business-detail.types";

function getActiveSocialMedia(
    socialLinks: SocialMediaLinks | null | undefined
) {
    const activeSocialMedia = socialLinks
        ? COMPANYS_SOCIAL_MEDIA.map((social) => {
            let url = "";
            if (social.label === "Sitio Web") url = socialLinks.website || "";
            if (social.label === "Instagram") url = socialLinks.instagram || "";
            if (social.label === "Facebook") url = socialLinks.facebook || "";
            if (social.label === "WhatsApp")
                url = socialLinks.whatsapp
                    ? `https://wa.me/${socialLinks.whatsapp}`
                    : "";
            return { ...social, url };
        }).filter((s) => s.url)
        : [];

    return activeSocialMedia;
}

function getBusinessDetailData(blok: BusinessDetailBlok) {
    const rawGallery = blok.images || [];
    const gallery = Array.isArray(rawGallery)
        ? rawGallery
            .map((img: StoryblokImage | string) =>
                typeof img === "string" ? img : img.filename
            )
            .filter(Boolean)
        : [];
    const image =
        (blok.image && typeof blok.image === "object"
            ? blok.image.filename
            : blok.image) ||
        gallery[0] ||
        "";
    const name = blok.title || blok.name || "";
    const category = blok.category || "";
    const isFeatured = blok.is_featured || false;
    const fullDescription = blok.full_description || blok.description || "";
    const description = blok.description || "";
    const amenities = Array.isArray(blok.amenities) ? blok.amenities : [];
    const events = Array.isArray(blok.events) ? blok.events : [];
    const schedules = Array.isArray(blok.schedules) ? blok.schedules : [];
    const address = blok.address || "";
    const addressPlace = blok.address_place || "";
    const price = blok.price || "";
    const descriptionTitle = blok.description_title || "";
    const socialLinks =
        Array.isArray(blok.socila_links) && blok.socila_links.length > 0
            ? blok.socila_links[0]
            : null;
    const activeSocialMedia = getActiveSocialMedia(socialLinks);

    return {
        gallery,
        image,
        name,
        category,
        isFeatured,
        fullDescription,
        description,
        amenities,
        events,
        schedules,
        address,
        addressPlace,
        price,
        descriptionTitle,
        activeSocialMedia,
    };
}

export { getActiveSocialMedia, getBusinessDetailData };
