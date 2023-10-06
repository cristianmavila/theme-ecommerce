const { promises } = require("fs");
const StyleDictionary = require("style-dictionary");
const { registerTransforms } = require("@tokens-studio/sd-transforms");

registerTransforms(StyleDictionary, {
  /* options here if needed */
});

async function run() {
  const baseDir = "figma/tokens/";
  const $themes = JSON.parse(await promises.readFile(`${baseDir}$themes.json`));
  const configs = $themes.map((theme) => ({
    source: Object.entries(theme.selectedTokenSets)
      .filter(([, val]) => val !== "disabled")
      .map(([tokenset]) => `${baseDir}${tokenset}.json`),
    platforms: {
      css: {
        transformGroup: "tokens-studio",
        files: [
          {
            destination: `figma/css/${theme.name}.css`,
            format: "css/variables",
          },
        ],
      },
      js: {
        transformGroup: "tokens-studio",
        files: [
          {
            destination: `figma/js/${theme.name}.js`,
            format: "javascript/es6",
          },
        ],
      },
    },
  }));

  configs.forEach((cfg) => {
    const sd = StyleDictionary.extend(cfg);
    sd.buildAllPlatforms();
  });
}

run();
