import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import fs from 'node:fs'
import path from "node:path";

export default function (eleventyConfig) {
  // configure base url
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // copy the admin folder so that config.yml is available
  eleventyConfig.addPassthroughCopy("admin");

  // copy assets
  eleventyConfig.addPassthroughCopy('assets');

  // generate images.jsonp for assets selector
  eleventyConfig.on("eleventy.before", () => {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp"];
    const imageFiles = fs.readdirSync('assets')
      .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
      .map(file => ({ name: file, value: `/assets/${file}` }));
    const jsonpContent = `callback(${JSON.stringify(imageFiles)});`;
    fs.writeFileSync('_site/assets.jsonp', jsonpContent, "utf8");
  });

  return {
    pathPrefix: "/festivaldescouleurs/",
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
