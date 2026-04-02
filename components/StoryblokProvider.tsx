"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import React from "react";

import { HomeBanner } from "./storyblok/home-banner";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    home_banner: HomeBanner,
  },
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
