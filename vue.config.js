const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: 'docs',
  publicPath: '/portfolio-pub/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.ezairyu.mofa.go.jp',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/opendata/country'
        }
      }
    }
  }
})
