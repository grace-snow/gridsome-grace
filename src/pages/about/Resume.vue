<template>
  <Layout>
    <div id="cv" class="section page-width page-padding">
      <section id="intro">
        <hgroup>
          <p class="ribbon">Resumé</p>
          <h1>Grace Snow</h1>
        </hgroup>

        <p class="h4Text">
          A passionate Accessibility Specialist and Frontend Developer looking for a new role
          working with a team to create <em>truly</em> inclusive digital experiences.
        </p>

        <ul class="unstyle-list mb-none">
          <li>
            <strong>Email: </strong>
            <a href="mailto:graceSnowDesign@gmail.com" class="link">graceSnowDesign@gmail.com</a>
          </li>
          <li>
            <strong>My site: </strong>
            <a href="https://gracesnowdesign.co.uk" class="link">gracesnowdesign.co.uk</a>
          </li>
          <li>
            <strong>Frontend blog: </strong>
            <a href="https://fedmentor.dev" class="link">FEDmentor.dev</a>
          </li>
        </ul>

        <p>
          <a href="/CV_grace_snow_11_2023.pdf" download class="btn no-print">Download resumé pdf</a>
        </p>
      </section>

      <section v-if="Cvskills.length" id="skills">
        <h2 class="equals-decal mb-none">Skills</h2>
        <div v-for="skill in Cvskills" :key="skill.id">
          <h3>{{ skill.subtitle }}</h3>
          <ul>
            <li
              v-for="(skillName, index) in skill.items"
              :key="`${skill.id}_${index}`"
              v-html="skillName"></li>
          </ul>
        </div>
        <div class="skills__cta">
          <h3 class="h4Text">Something Missing?</h3>
          <p>
            <a href="mailto:gracesnowdesign@gmail.com" class="link">Ask me about it</a>. And don’t
            worry, I’m always happy to learn new stuff!
          </p>
        </div>
      </section>

      <section id="experience">
        <h2 class="equals-decal">Experience</h2>
        <p>
          <strong
            >Agency clients and previous work projects cover multiple industry sectors including
            utilities, engineering, charity and e-commerce:</strong
          >
          JCB, SSEN Transmission, SSEN Distribution, United Utilities, SES Water, Universities
          Superannuation Scheme (USS), British Red Cross, Coal Miners Pension Trust, Love2Shop, High
          Street Vouchers, Croda, Element Materials, Christians Against Poverty, Benchmark
          Architects, ENW, L1 Renewables, Slatewood Financing;
        </p>
        <div v-for="item in Experience" :key="item.id">
          <h3>{{ item.subtitle }}</h3>
          <ul>
            <li
              v-for="(itemName, index) in item.items"
              :key="`${item.id}_${index}`"
              v-html="itemName"></li>
          </ul>
        </div>
      </section>

      <section v-if="Jobs.length" id="jobs">
        <div class="jobs__inner">
          <h2 class="equals-decal">Job History</h2>
          <ul class="unstyle-list">
            <li v-for="job in Jobs" :key="job.id">
              <article class="block jobs__job">
                <h3 v-html="job.jobTitle" class="job__title"></h3>
                <h4 class="job__subtitle">
                  <span :class="job.employerLink ? 'link' : null">
                    <g-link
                      v-if="job.employerLink"
                      :to="job.employerLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="employer job__employer"
                      v-html="job.employer">
                    </g-link>
                    <span v-else class="employer job__employer" v-html="job.employer"></span>
                  </span>
                  <span class="job__date">{{ job.jobDateRange }}</span>
                </h4>
                <p class="job__desc" v-html="job.jobDesc" />
              </article>
            </li>
          </ul>
        </div>
      </section>

      <section v-if="Awards.length" id="certs">
        <h2>Awards & Certifications</h2>
        <ul>
          <li v-for="item in Awards" :key="item.id" v-html="item.award" />
        </ul>
      </section>

      <section id="refs">
        <h2>Recommendations</h2>
        <p>
          See my recommendations on
          <a href="http://www.linkedin.com/in/gracesnow" target="_blank" rel="noopener noreferrer"
            >LinkedIn</a
          ><br />
          <strong>References available on request.</strong>
        </p>
      </section>
    </div>
    <Contact class="site-contact page-header border-top" />
  </Layout>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteAuthor
      siteUrl
    }
  }
</static-query>

<script>
import Contact from '~/components/Contact.vue';
import PageHeader from '~/components/PageHeader.vue';
import Jobs from '@/data/jobs.json';
import Cvskills from '@/data/cvskills.json';
import Experience from '@/data/experience.json';
import Awards from '@/data/awards.json';

export default {
  data() {
    return {
      Contact,
      PageHeader,
      Cvskills,
      Experience,
      Jobs,
      Awards,
    };
  },
  metaInfo() {
    return {
      title: 'Resume',
      link: [
        {
          rel: 'canonical',
          href: `${this.$static.metadata.siteUrl}/about/resume`,
        },
      ],
      htmlAttrs: {},
      bodyAttrs: {},
      meta: [
        {
          name: 'author',
          content: this.$static.metadata.siteAuthor,
        },
        {
          property: 'og:title',
          content: 'Resume | ' + this.$static.metadata.siteName,
        },
        {
          name: 'twitter:title',
          content: 'Resume | ' + this.$static.metadata.siteName,
        },
        {
          itemprop: 'name',
          content: 'Resume | ' + this.$static.metadata.siteName,
        },
      ],
    };
  },
  components: {
    Contact,
  },
};
</script>

<style lang="scss">
.ribbon {
  @include small-caps-title;

  hgroup & {
    margin-bottom: -0.15em !important;
    font-size: $header4;
    font-size: $header4-clamp;
  }
}

#cv {
  ul:not([class]) {
    padding-left: 1rem;
    max-width: 68ch;
  }

  h2,
  h3:not([class]) {
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
}

// skills
.skill-type__heading:first-of-type {
  margin-top: 0;
}

.jobs {
  position: relative;

  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    right: 0;
  }

  &:before {
    background: $neutral-100;
    opacity: 0.5;
    clip-path: polygon(100% 50%, 100% 0px, 45vw 0);
    top: 0;
    z-index: -2;
  }

  @include media-up(medium) {
    &:after {
      background: $blue-600;
      clip-path: polygon(100% 100%, 100% 70%, 55% 100%);
      bottom: 0;
      opacity: 0.08;
      z-index: -1;
    }
  }
}

.jobs__inner {
  @include limit-width;
  margin: 0;
}

li:not(:last-child) .jobs__job {
  margin-top: 0.5rem;
  margin-bottom: 2.5rem;
}

li:last-child .jobs__job {
  margin: 0;
}

.job__title {
  font-size: $header4;
  font-size: $header4-clamp;
  text-transform: capitalize;
  margin-bottom: 0.5em;
}

.job__subtitle {
  @include small-caps-title;
  margin-block: 0.5em;
}

.job__employer {
  margin-bottom: 0.5rem;
  display: block;
  text-decoration: none;
  font-weight: $weight-bold;

  @include media-up(small) {
    margin-bottom: 0;
    display: inline-block;
  }
}

.job__date {
  position: relative;
  display: block;

  @include media-up(small) {
    margin-left: 30px;
    display: inline-block;
    &:after {
      @include list-divider;
      top: 0;
    }
  }
}

@media print {
  header,
  footer,
  #contact,
  .no-print,
  *:before,
  *:after {
    display: none;
  }

  .section {
    padding-block: 0;
  }

  p,
  ul {
    max-width: unset;
  }

  body {
    background: none;
    font-size: 0.75rem;
  }

  h2,
  h3 {
    margin-top: 1.25em;
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: 1.5rem;
    margin-top: 0;
  }

  h2 {
    font-size: 1.25rem;
  }

  h3,
  .job__title,
  .h4Text {
    font-size: 1rem;
  }

  .job__subtitle {
    text-transform: none;
    font-size: 0.875rem;
  }

  .job__date {
    text-transform: none;
    margin-left: 2ch;
  }

  [href='#top'] {
    display: none;
  }

  a:not([aria-hidden]):after {
    content: '(' attr(href) ')' !important;
    display: inline-block !important;
    padding-inline-start: 0.5ch;
    background-color: transparent !important;
    height: unset !important;
    width: unset !important;
    position: static !important;
  }
}
</style>
