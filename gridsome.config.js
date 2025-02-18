// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // or if you use scss
        path.resolve(__dirname, './src/assets/styles/globals.scss'),
        // you can also use a glob if you'd prefer
        // path.resolve(__dirname, './src/assets/styles/*.scss'),
      ],
    });
}

module.exports = {
  siteName: 'Grace Snow Design',
  siteDescription:
    'Accessibility specialist, front end developer, and inclusivity consultant based in Penzance, UK',
  siteUrl: 'https://www.gracesnowdesign.co.uk',
  icon: {
    favicon: {
      src: './src/favicon.png',
      sizes: [16, 32, 96],
    },
    touchicon: {
      src: './src/touchicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true,
    },
  },
  plugins: [
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900,
      },
    },
    // {
    //   // Create blog posts from markdown files
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     typeName: 'BlogPost',
    //     path: 'blog/*.md',
    //     route: '/blog/:year/:month/:day/:slug',
    //   },
    // },
    // {
    //   // Create project case studies from markdown files
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     typeName: 'Project',
    //     path: 'projects/*.md',
    //     route: '/projects/:slug',
    //   },
    // },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/thanks', '/blog', '/blog/*/**', '/projects', '/projects/*/**'],
        config: {
          '/about/**': {
            changefreq: 'weekly',
            priority: 0.5,
          },
          '/about': {
            changefreq: 'weekly',
            priority: 0.7,
          },
          '/': {
            changefreq: 'monthly',
            priority: 1,
          },
          '/mentoring': {
            changefreq: 'monthly',
            priority: 1,
          },
          //   '/projects/*': {
          //     changefreq: 'weekly',
          //     priority: 0.7,
          //   },
        },
      },
    },
  ],
  transformers: {
    remark: {
      // global remark options
    },
  },
  templates: {
    // BlogPost: '/blog/:year/:month/:day/:slug',
    // Project: '/projects/:slug',
    // CV: '/about/:slug',
  },
  chainWebpack: (config) => {
    config.module;
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });

    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');

    config.plugin('BundleAnalyzerPlugin').use(BundleAnalyzerPlugin, [{ analyzerMode: 'disabled' }]); // 'disabled' or 'static'
  },
};
