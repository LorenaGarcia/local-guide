import { fetchStory } from "@/lib/storyblok";
import { getHighlightedBusinesses } from "@/components/home/components/category-section/category-section.utils";
import BusinessPageClient from "./business-page-client";


export const revalidate = 60; 

export default async function BusinessPage() {
  const story = await fetchStory("business_page");
  const businessBloks = story?.content?.body || [];
  
  const businesses = getHighlightedBusinesses(businessBloks);

  return <BusinessPageClient initialBusinesses={businesses} />;
}
