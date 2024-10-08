module.exports = function (eleventyConfig) {
  // Copy the admin folder so that config.yml is available
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
