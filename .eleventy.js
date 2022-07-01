const yaml = require('js-yaml');

function parse(content) {
  return {
    boardspace: yaml.load(content),
  };
}

module.exports = (eleventyConfig) => {
  eleventyConfig.addDataExtension('boardspace.yaml', parse);
  eleventyConfig.addDataExtension('yaml', parse);
  eleventyConfig.addPassthroughCopy('content/**/*.webp');
  eleventyConfig.addPassthroughCopy('content/**/*.png');
  eleventyConfig.addPassthroughCopy('content/**/*.jpg');
  eleventyConfig.addPassthroughCopy('content/**/*.jpeg');
  eleventyConfig.addPassthroughCopy('content/**/*.glb');
  eleventyConfig.addPassthroughCopy('content/**/*.svg');
  eleventyConfig.addPassthroughCopy({
    static: '/',
  });

  return {
    dir: {
      input: 'content',
    },
  };
};
