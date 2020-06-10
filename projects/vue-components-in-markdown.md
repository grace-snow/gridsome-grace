---
projectName: 'Test Project'

title: Vue Components in Markdown
listingTitle: Vue Components in Markdown
excerpt: An example markdown page that has Vue Components inside of it!
year: 2020

heroTitle: 'Web app to help teachers plan effective lessons in just 5 mins'
role: 'Writer'
keyTech: 
- 'Adobe XD'
- 'CSS Grid'
- 'Vue.js' 


slug: 'test'
listingImage: 'http://placekitten.com/g/300/150'
listingImageAlt: 'alt text here'
sortOrder: 2
---
import TestComponent from '~/components/CounterComponent.vue'
import ContactComponent from '~/components/Contact.vue'

Below is a Vue Component from `~/components/Contact.vue`:

<contact-component />

<hr>

The ability to use Vue Components in Markdown was added in Gridsome v0.7 with the [vue-remark](https://gridsome.org/plugins/@gridsome/vue-remark) plugin.

```js
<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-8">{{ $page.post.date }}</div>
      <div class="markdown-body" v-html="$page.post.content" />
    </div>
  </Layout>
</template>
```

```css
.test {
  background: white;
  color: red;
}
```
