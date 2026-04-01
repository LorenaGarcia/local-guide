import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react/rsc";
import { HomeBanner } from "@/components/storyblok/HomeBanner";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    home_banner: HomeBanner,
  }
});

export async function fetchStory(slug: string) {
  const storyblokApi = getStoryblokApi();
  try {
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version: "draft",
    });
    return data.story;
  } catch (error) {
    console.error("Error fetching connecting to Storyblok API:", error);
    return null;
  }
}
