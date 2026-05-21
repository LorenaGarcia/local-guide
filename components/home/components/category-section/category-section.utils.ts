import { CategoryBlok, BusinessBlok } from "./category-section.types";

function getCategories(categoryBloks: CategoryBlok[]) {
    return categoryBloks.map((b) => ({
    id: b._uid,
    name: b.title || "",
    icon: b.icon || "",
    color: b.bg_color || "",
    iconColor: b.icon_color || "",
    blok: b,
  }));
}

function getHighlightedBusinesses(businessBloks: BusinessBlok[]) {
  return businessBloks
    .filter((b) => b.is_active)
    .map((b) => {
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
        url: targetUrl,
        is_active: b.is_active,
        blok: b,
      };
    });
}

export { getCategories, getHighlightedBusinesses };
