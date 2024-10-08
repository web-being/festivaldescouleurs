import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // configure base url
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Copy the admin folder so that config.yml is available
  eleventyConfig.addPassthroughCopy("admin");

  // copy assets
  eleventyConfig.addPassthroughCopy("assets");


  return {
    pathPrefix: "/festivaldescouleurs/",
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
