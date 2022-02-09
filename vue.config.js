module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "@/assets/sass/_variables.scss";`
            },
        }
    }
}

//   Watch https://www.youtube.com/watch?v=agaC4oKn_0k for configuration 
// npm install -D sass-loader@^10 sass [use this one if you have encountered an error]