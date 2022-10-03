// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('typeface-metropolis');
require('typeface-titillium-web');

import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/styles/globals.scss';
import VueScrollTo from 'vue-scrollto';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  // Use Vue-scrollto library inside our project
  Vue.use(VueScrollTo);

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'en-gb' };

  // Add attributes to BODY tag
  // head.bodyAttrs = { class: 'custom-body-class' }

  // Add an external JavaScript before the closing </body> tag
  // head.script.push({
  //   src: 'https://static.cloudflareinsights.com/beacon.min.js',
  //   defer: 'true',
  //   'data-cf-beacon': "{'token': '9f775fbb155e441b995eecb774741c09'}",
  //   body: true
  // })
}
