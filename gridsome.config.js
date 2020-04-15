// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // or if you use scss
        path.resolve(__dirname, './src/assets/styles/globals.scss'),
        // you can also use a glob if you'd prefer
        // path.resolve(__dirname, './src/assets/styles/*.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Grace Snow Design',
  siteDescription: 'Connect with Grace: UX Designer, Front End Developer, Mentor, Teacher and Accessibility Advocate based in Liverpool, UK',
  siteUrl: 'https://www.gracesnowdesign.co.uk',
  plugins: [
    // See https://www.przu.com/posts/building-przu/
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'posts/*.md',
    //     typeName: 'WebPost',
    //     route: '/:slug',
    //   }
    // }
  ], 
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	},
}
