<template>
  <Layout>
    <section class="about-hero page-width page-padding">
      <div class="section about-hero__primary">
        <h1 class="equals-decal page-heading about-hero__heading has-subheading">About Me</h1>
        <ul class="list list--chevrons about-hero__list" role="list">
          <li role="listitem">Accessibility Specialist</li>
          <li role="listitem">Front End Developer</li>
          <li role="listitem">Equality Champion</li>
        </ul>
        <p>
          <a href="/CV_grace_snow_11_2023.pdf" class="btn" download>Download pdf</a>
        </p>
        <p>
          <a href="/about/resume">View my resumé online</a>
        </p>
      </div>
      <div class="about-hero__secondary">
        <div id="location" class="">
          <svg
            focusable="false"
            role="image"
            title="Cornwall Flag"
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 1667 1042"
            class="location-icon">
            <path d="M0 0h1666.7v1041.7H0z" />
            <clipPath id="a"><path d="M0 0h1666.7v1041.7H0z" /></clipPath>
            <g fill="#ebebeb" clip-path="url(#a)">
              <path d="M0 437.5h1666.7v166.7H0z" />
              <path d="M750 0h166.7v1041.7H750z" />
            </g>
          </svg>
          <p>
            Until August 2022 I was settled in <strong class="accent">Liverpool, UK</strong>, but am
            now based in sunny <strong class="accent">Penzance in Cornwall</strong>. I am always
            keen to contribute to new <strong>remote</strong> accessibility, front end or
            consultancy opportunities.
          </p>
        </div>
      </div>
    </section>

    <section id="values" class="section page width page-padding values">
      <h2 class="values__heading equals-decal">My Values</h2>
      <p class="values__subheading">This is what I care about (it's not an exhaustive list!)</p>
      <ul class="grid-1-3 values__values-list unstyle-list">
        <li v-for="value in Values" :key="value.id" class="values__value-item">
          <div class="block">
            <h3 v-html="value.heading" class="value-item__heading"></h3>
            <p v-html="value.content" class="value-item__content"></p>
          </div>
        </li>
      </ul>
    </section>

    <section id="testimonials" class="section page width page-padding page-header no-min-h">
      <h2>What others say</h2>
      <div class="grid grid--auto" style="--gap: 3rem">
        <figure v-for="item in Testimonials" :key="item.id">
          <blockquote class="block mb">&#8220;{{ item.quote | safe }}&#8221;</blockquote>
          <figcaption>
            <em
              ><strong
                >{{ item.author }}<span v-if="item.role">, {{ item.role }}</span></strong
              ></em
            >
          </figcaption>
        </figure>
      </div>
    </section>

    <section id="skills" class="section page-padding page-width skills">
      <h2 class="equals-decal mb-large">My Skills</h2>
      <div class="skills__skills-list">
        <div v-for="skill in Skills" :key="skill.id" class="skills-list__skill-type">
          <h3 class="skill-type__heading">{{ skill.skillType }}</h3>
          <p v-if="skill.skillIntro" class="h5Text" v-html="skill.skillIntro" />
          <ul class="list list--chevrons skill-type__list">
            <li
              v-for="skillName in skill.skillsArray"
              v-html="skillName"
              class="skill-type__skill"></li>
          </ul>
        </div>
      </div>
      <div class="skills__cta">
        <h3 class="skills-cta__heading">Something Missing?</h3>
        <p>
          <a href="mailto:gracesnowdesign@gmail.com" class="link">Ask me about it</a>. And don’t
          worry, I’m always happy to learn new stuff!
        </p>
      </div>
    </section>

    <section class="section page-width page-padding h5Text talks dark-bg">
      <h2>Voted "Most Passionate" by peers</h2>
      <blockquote class="block">
        <p>
          &#8220;This person <strong class="accent">loves what they do</strong>. It's obvious and
          infectious, and they use their own personality and style to champion the company to people
          around them. They care about
          <strong class="accent">doing the right things, and about doing things right</strong>. They
          are not done with something until it's met the customer's needs and their own high
          standards.
        </p>
        <p>
          &#8220;They are there when things are good and when things are tough, and they
          <strong class="accent">inspire others</strong> to the same levels of commitment and high
          standards.&#8221;
        </p>
      </blockquote>
      <p>
        <small>&mdash; Mando Agency Staff Awards, 2023</small>
      </p>
    </section>

    <Contact class="page-header border-top" />
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
// import JobListing from "~/components/JobListing.vue";
import Values from '@/data/values.json';
import Jobs from '@/data/jobs.json';
import Skills from '@/data/skills.json';
import Testimonials from '@/data/testimonials.json';

export default {
  data() {
    return {
      PageHeader,
      Values,
      Jobs,
      Skills,
      Testimonials,
    };
  },
  metaInfo() {
    return {
      title: 'About',
      link: [
        {
          rel: 'canonical',
          href: `${this.$static.metadata.siteUrl}/about/`,
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
          content: 'About | ' + this.$static.metadata.siteName,
        },
        {
          name: 'twitter:title',
          content: 'About | ' + this.$static.metadata.siteName,
        },
        {
          itemprop: 'name',
          content: 'About | ' + this.$static.metadata.siteName,
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
.about-hero {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1.5rem;

  @include media-up(medium) {
    flex-direction: row;
    justify-content: space-between;
  }

  @include media-up(medium) {
    min-height: 65vh;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
  }

  &:before {
    width: 100%;
    background: $neutral-100;
    opacity: 0.8;
    clip-path: polygon(100% 100%, 100% 0px, 0% 100%);
    mix-blend-mode: color-burn;
    z-index: -1;

    @include media-up(medium) {
      clip-path: polygon(100% 0px, 30vw 0px, 100% 100%);
    }
  }

  &:after {
    width: 100%;
    background-image: $intro-gradient;
    clip-path: polygon(100% 64%, 0% 52%, 0 100%, 100% 100%);
    z-index: -2;

    @include media-up(medium) {
      width: 55vw;
      clip-path: polygon(100% 0px, 45% 0px, 0px 100%, 100% 100%);
    }
  }
}

.about-hero__primary {
  flex: 1 1 60%;
}

.about-hero__secondary {
  position: relative;
  color: #fff;
  align-self: flex-end;
  flex: 1 1 30%;
  font-size: $smallText;
  font-size: $paragraph-clamp;
  padding-block: 3em;

  @include media-up(medium) {
    text-align: right;
  }
}

.about-hero__heading {
  color: $blue-600;
  font-size: $jumbo3;
  font-size: $jumbo3-clamp;
}

.about-hero__list {
  @include font-heading;
  line-height: $line-height-small;
  font-size: $header4;
  font-size: $header4-clamp;
  margin-bottom: 1.5rem;

  > li:before {
    top: 0.075em;
  }
}

.accent {
  color: $accent-200;
}

.about-hero svg.accent {
  fill: $accent-200;
  transform: scaleX(-1);
  height: 5rem;
  width: 5rem;

  @include media-up(small) {
    transform: none;
    height: initial;
    width: initial;
  }
}

.values {
  background: $neutral-100;
}

.values__heading {
  margin-bottom: 1rem;
}

.values__subheading {
  margin-bottom: 2.5rem;
  font-weight: $weight-semibold;
}

.values__values-list {
  @include media-up(small) {
    @include flex-grid(1.5rem, 33%);
  }
}

.values__value-item {
  min-width: 230px;

  @include media-up(small) {
    .block {
      margin-bottom: 0;
    }
  }
}

.value-item__heading {
  font-size: $header4;
  font-size: $header4-clamp;
  color: $blue-600;
  margin-bottom: 0.5em;
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

.jobs__job {
  margin-bottom: 3.5rem;
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

.skills {
  position: relative;
  background: $neutral-100;

  @include media-up(small) {
    &:before,
    &:after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      mix-blend-mode: multiply;
    }
  }

  &:before {
    background: $blue-600;
    opacity: 0.03;
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    width: 55vw;
    left: unset;
    right: 0;
  }
  &:after {
    background: $blue-500;
    opacity: 0.04;
    clip-path: polygon(100% 100%, 100% 0, 45vw 100%);
  }
}

.skills__skills-list {
  display: grid;
  gap: 24px 42px;
  z-index: 1;
  position: relative;

  @include media-up(large) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.skill-type__heading {
  color: $blue-600;
  font-size: $header4;
  font-size: $header4-clamp;
  margin-bottom: 0.5em;
}

.skills__cta {
  margin-top: 3rem;
}

.skills-cta__heading {
  font-size: $header5;
  font-size: $header5-clamp;
  margin-bottom: 1rem;
}

.location-icon {
  width: 75px;
  border: 1px solid #fff3;
  margin-bottom: 0.5em;
}

#testimonials {
  background-color: $neutral-50;

  &::after {
    opacity: 0.15;
  }
}
</style>
