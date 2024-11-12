const themeDir = "./themes/vapor/"
const defaultConfig = require(themeDir + 'postcss.config');

module.exports = {
    ...defaultConfig,
    plugins: {
        ...defaultConfig.plugins,
        "postcss-import": {
            "path": "./assets/css/",
        }
    }
}
