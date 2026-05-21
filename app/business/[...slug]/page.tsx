import React from 'react';
import {BusinessDetail} from '@/components/bussines-detail';

import { fetchStory } from "@/lib/storyblok";

export default async function BusinessDetailPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  
  const fullSlug = resolvedParams.slug.join('/');
  
  let story = await fetchStory(`business/${fullSlug}`);
  
  if (!story) {
    story = await fetchStory(fullSlug);
  }
  
  const content = story?.content;
  const blok = content?.component === "Business Detail" 
    ? content 
    : content?.body?.find((b: any) => b.component === "page" || b.component === "Business Detail");

  return (
    <BusinessDetail params={params as any} blok={content?.body[0] || blok} />
  );
}
