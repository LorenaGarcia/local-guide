import React from 'react';
import {BusinessDetail} from '@/components/bussines-detail';

import { fetchStory } from "@/lib/storyblok";

export default async function BusinessDetailPage({ params }: { params: Promise<{ id: string }> }) {
  console.log("params --", params)
  
  const resolvedParams = await params;
  let story = await fetchStory(`business/${resolvedParams.id}`);
  
  if (!story) {
    story = await fetchStory(resolvedParams.id);
  }

  const content = story?.content;

  return (
    <BusinessDetail params={params} blok={content?.body[0]} />
  );
}
