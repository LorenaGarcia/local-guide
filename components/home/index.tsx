import React from 'react';
import { Hero } from './components/hero';
import { UpcomingEvents } from './components/upcoming-events';
import { CategorySection } from './components/category-section';


function Home() {

  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-8">
      <Hero />
      <CategorySection />
      <UpcomingEvents />
    </div>
  );
}

export { Home };
