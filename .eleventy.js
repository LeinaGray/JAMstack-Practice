module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
		files: 'site/css/**/*.css'
	});
  eleventyConfig.addPassthroughCopy("src/img");

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