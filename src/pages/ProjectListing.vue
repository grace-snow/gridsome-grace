<template>
  <Layout>
    <section class="section">
      <h1 class="left">My Work</h1>
      <p>
        Here's a few example designs and code snippets.
        <br />Or head to my
        <a href="#projects">project case studies</a> if you want more detail.
      </p>
      <div>[slider / gallery goes here]</div>
    </section>
    <section class="section">
      <h2>Case Studies</h2>
      <div class="filters">
        <ul>
          <li>
            <label for="dsnProjects">
              <input type="checkbox" name="dsnProjects" id="dsnProjects" />
              UX &amp; Design
            </label>
          </li>
          <li>
            <label for="feProjects">
              <input type="checkbox" name="feProjects" id="feProjects" />
              Front End
            </label>
          </li>
          <li>
            <label for="accProjects">
              <input type="checkbox" name="accProjects" id="accProjects" />
              Accessibility
            </label>
          </li>
        </ul>
      </div>
      <div class="js-projectList">
        <!-- TODO: Loop over data to output list -->
        <!-- TODO: Add margin between each list item -->
        <g-link to class="flex-grid-wrapper">
          <div class="flex-grid projectItem bg-dark">
            <div class="projectInfo">
              <h3 class="projectTitle">Helping teachers plan</h3>
              <h4 class="projectRole">Lead Product Designer &amp; Front End</h4>
              <p
                class="projDesc"
              >A mobile-first web app to ease the burden of lesson planning on teachers.</p>
              <g-link to class="btn">The 5 minute lesson plan</g-link>
            </div>
            <div class="projectImg">
              <img src alt />
            </div>
          </div>
        </g-link>
      </div>
    </section>

    <Contact id="contact" />
  </Layout>
</template>

<script>
import Contact from "~/components/Contact.vue";

export default {
  metaInfo: {
    title: "Work"
  },
  components: {
    Contact
  }
};
</script>

<style lang="scss">
</style>