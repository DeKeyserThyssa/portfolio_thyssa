import rss, {pagesGlobToRssItems} from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Thyssa De Keyser",
    description: "My journey learning Astro",
    site: "https://thyssadekeyser.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
