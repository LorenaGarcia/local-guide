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
    .map((b) => ({
      id: b._uid,
      name: b.name || "",
      description: b.description || "",
      image: b.image?.filename || b.image || "",
      tags: b.tags || [],
      address: b.address || "",
      is_active: b.is_active,
      blok: b,
    }));
}

export { getCategories, getHighlightedBusinesses };
