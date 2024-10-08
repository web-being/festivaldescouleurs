module.exports = function (eleventyConfig) {
  // Copy the admin folder so that config.yml is available
  eleventyConfig.addPassthroughCopy("admin");

  // copy assets
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
