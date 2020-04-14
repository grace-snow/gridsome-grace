<template>
  <Layout>
    <section class="section">
      <h1>About Me</h1>
      <ul class="list list--chevrons">
        <li>Ux Web Designer</li>
        <li>Front End Developer</li>
        <li>Creative Problem Solver</li>
      </ul>
    </section>
    <section class="section">
      <div id="location">
        <img src alt="Orange Superlambanana" />
        <p>I'm based in Liverpool, UK (best city in the world). In fact, I love it so much I'd only consider taking on work that's based locally, or where I could work remotely most of the time.</p>
      </div>
      <button type="button" class>Download Resume</button>
    </section>
    <section id="values" class="section">
      <h2>My Values</h2>
      <p>Here's some stuff I care about (it's not an exhaustive list!)</p>
      <ul class="flex-grid">
        <li>
          <h3>Inclusivity</h3>
          <p>Whether I'm designing or coding, I want to make every website, product and interface as intuitive, inclusive and enjoyable as possible.</p>
        </li>
        <li>
          <h3>Mentoring</h3>
          <p>I highly value learning and like to give back to others where I can. I particularly look out for tech-curious women and non-binary people.</p>
        </li>
        <li>
          <h3>Animals</h3>
          <p>Yep, I'm one of those vegetarian animal lovers. I'm not preachy with it, I simply enjoy cooking plant-based food and adore cuddling my cats. End of.</p>
        </li>
      </ul>
    </section>

    <section id="jobs">
      <h2>Job History</h2>
      <!-- TODO make this a component that loops through data from elsewhere -->
      <article>
        <h3>Front end web &amp; app developer</h3>
        <h4>
          <a href target="_blank" rel="noopener noreferrer" class="employer">Appreciate Group</a>
          <span class="date">Oct 2019 - present</span>
        </h4>
        <p>So far my work has focussed primarily on improving the legacy front end code of one product - Park Christmas Savings. I have implemented a sass-gulp workflow, made numerous performance and accessibility improvements and worked closely with an external design agency to build out and run A/B tests on their new designs. While at Appreciate, I've started learning javascript and React in preparation for upcoming projects.</p>
      </article>
      <article>
        <h3>UX designer and front end</h3>
        <h4>
          <a href target="_blank" rel="noopener noreferrer" class="employer">Angel Solutions</a>
          <span class="date">Oct 2014 - Oct 2019</span>
        </h4>
        <p>Over 5 years at Angel I grew from a junior marketing and email design position to become the lead designer and front end developer on a new mobile-first web app, as well as redesigning modules on other large-scale products serving the education industry. There are too many projects to list them all, but several are included on my projects page, or feel free to ask me about them if you want to know more :)</p>
      </article>
      <article>
        <h3>Ski instructor and trip leader</h3>
        <h4>
          <a href target="_blank" rel="noopener noreferrer" class="employer">Oak Hall Expeditions</a>
          <span class="date">Nov 2013 - Oct 2014</span>
        </h4>
        <p>A little career break (although I did do a full redesign of their website while there!) Not much to say - ask me about this one if you're interested.</p>
      </article>
      <article>
        <h3>Head of communications & designer</h3>
        <h4>
          <a
            href
            target="_blank"
            rel="noopener noreferrer"
            class="employer"
          >Imagine If Trust / Frontline Trust</a>
          <span class="date">Nov 2013 - Oct 2014</span>
        </h4>
        <p>My responsibilities were wide-ranging, covering marketing, content writing and editing, communications & PR, graphic design, website design and managing apprentices. I loved working for a charity and although I came into this role with a background in print journalism, it was here that I discovered a love of design and where I self-taught HTML, CSS and php.</p>
      </article>
    </section>

    <section id="skills" class="section">
      <h2>Skills</h2>
      <h3>Front end</h3>
      <ul class="list list--chevron">
        <li>HTML</li>
        <li>Modern and legacy CSS (or scss)</li>
        <li>Vanilla JavaScript, Vue.js &amp; React.js</li>
        <li>Documentation</li>
        <li>Accessibility</li>
        <li>Version Control Systems (Git &amp; SVN)</li>
        <li>Static Site Generators</li>
        <li>HTML Email Development</li>
      </ul>
      <h3>UX Design</h3>
      <ul class="list list--chevron">
        <li>Inclusive Design</li>
        <li>Wireframes and User Flows</li>
        <li>Adobe CC Suite</li>
        <li>XD, Figma or HTML Prototypes</li>
        <li>Content audits and edits</li>
        <li>Competitor Analysis</li>
        <li>Product Specs</li>
        <li>User Interviews and Testing</li>
      </ul>
    </section>

    <Contact id="contact" />
  </Layout>
</template>

<script>
import Contact from "~/components/Contact.vue";

export default {
  metaInfo: {
    title: "About",
    htmlAttrs: {},
    bodyAttrs: {}
  },
  components: {
    Contact
  }
};
</script>

<style lang="scss">
.flex-grid {
  @include flex-grid(1rem, 33%);
}
</style>