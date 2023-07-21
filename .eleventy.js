module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
		files: 'site/css/**/*.css'
	});
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/assets");

    return {
      dir: {
        input: "src",
        output: "site",
        // data: "menu",
//         includes: "_includes",
//         // layouts: "src/layouts",
      }
    }
  };