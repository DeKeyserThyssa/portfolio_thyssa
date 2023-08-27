import rss, {pagesGlobToRssItems} from "@astrojs/rss";
import {getCollection} from "astro:content";

export async function get() {
  const posts = await getCollection("posts");
  return rss({
    title: "Thyssa De Keyser",
    description: "Portfolio of Thyssa De Keyser",
    site: "https://thyssadekeyser.netlify.app/",
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `https://thyssadekeyser.netlify.app/posts/${post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
