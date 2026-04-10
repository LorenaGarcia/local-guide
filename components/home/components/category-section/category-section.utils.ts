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
  return businessBloks.map((b) => ({
    id: b._uid,
    name: b.name || "",
    description: b.description || "",
    image: b.image?.filename || b.image || "",
    price: b.price || "",
    tags: b.tags || [],
    address: b.address || "",
    blok: b,
  }));
}

export { getCategories, getHighlightedBusinesses };
