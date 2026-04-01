import { Home as HomePage } from "@/components/home";
import { fetchStory } from "@/lib/storyblok";

export default async function Page() {
  const story = await fetchStory("root");

  return <HomePage story={story} />;
}
