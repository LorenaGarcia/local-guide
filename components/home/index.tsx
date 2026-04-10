import React from "react";
import { Hero } from "./components/hero";
import { UpcomingEvents } from "./components/upcoming-events";
import { CategorySection } from "./components/category-section";
import { StoryblokComponent } from "@storyblok/react";

function Home({ story }: { story?: any }) {
  const content = story?.content;
  const heroBlok =
    content?.hero_section?.[0] ||
    content?.body?.find((b: any) => b.component === "home_banner");

  const categoryBloks = content?.category_carousel;
  const carouselHighliths = content?.carousel_highliths;

  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8">
      {heroBlok ? <StoryblokComponent blok={heroBlok} /> : <Hero />}
      <CategorySection categoryBloks={categoryBloks} businessBloks={carouselHighliths} />
      <UpcomingEvents />
    </div>
  );
}

export { Home };
