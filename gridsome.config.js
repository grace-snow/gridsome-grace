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
    {
      // Create blog posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: 'blog/*.md',
        route: '/blog/:slug'
      }
    },
    {
      // Create project case studies from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Project',
        path: 'projects/*.md',
        route: '/projects/:slug'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/thanks'],
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/projects/*': {
            changefreq: 'weekly',
            priority: 0.7
          },
        }
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  templates: {
    BlogPost: '/blog/:slug',  // /blog/:year/:month/:day/:slug
    Project: '/projects/:slug',
  },
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
	},
}
