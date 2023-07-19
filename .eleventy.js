module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
		files: 'site/css/**/*.css'
	});
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