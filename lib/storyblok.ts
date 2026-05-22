import {
  storyblokInit,
  apiPlugin,
  getStoryblokApi,
} from "@storyblok/react/rsc";
import { HomeBanner } from "@/components/storyblok/home-banner";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    home_banner: HomeBanner,
  },
});

export async function fetchStory(slug: string) {
  const storyblokApi = getStoryblokApi();

  const isUuid =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      slug.replace("business/", "")
    );
  const apiParams: any = {
    version: "draft",
    resolve_relations: "Business card.link_detail,Date card.link_detail",
  };

  if (isUuid) {
    apiParams.find_by = "uuid";
    slug = slug.replace("business/", "");
  }

  try {
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, apiParams);
    return data.story;
  } catch (error: any) {
    if (error?.status === 404 || error?.response?.status === 404) {
      return null;
    }
    console.error("Error fetching connecting to Storyblok API:", error);
    return null;
  }
}
