module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,html}", "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
        extend: {},
        screens: {
          sm: '480px',
          md: '768px',
          lg: '976px',
          xl: '1440px',
        },
    },
    plugins: [require('tw-elements/dist/plugin')]
}
