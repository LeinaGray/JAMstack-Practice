module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/css/*.css");
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