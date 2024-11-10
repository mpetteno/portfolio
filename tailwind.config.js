const themeDir = "./themes/vapor/"
const defaultConfig = require(themeDir + 'tailwind.config');
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    ...defaultConfig,
    content: [
        ...defaultConfig.content,
        themeDir + 'layouts/**/*.html',
        'config/_default/hugo.toml'
    ],
    theme: {
        ...defaultConfig.theme,
        fontFamily: {
            'sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans]
        }
    }
};