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

  return {
    pathPrefix: "/festivaldescouleurs/",
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
