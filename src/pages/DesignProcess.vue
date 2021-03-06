<template>
  <Layout>
    <Page-Header pageTitle="Design Process" class="no-bg no-min-h">
      <template v-slot:intro>
        I don't always do everything in these steps myself, but this gives a rough idea of how my
        mind works when it comes to a new design challenge&hellip;
      </template>
    </Page-Header>

    <div class="dsn auto-visible" role="presentation">
      <section id="stage1" class="dsn__stage section page-width page-padding">
        <div class="stage__content" data-stage="1.">
          <h2 id="research" class="stage__heading">Research</h2>
          <p class="stage__subheading">Empathise</p>
          <p>
            Whether it's guerrilla testing, feedback surveys, analytics data, purchasing stats, or
            good old fashioned online reviews, there's always a way to find out how people feel
            using your web products. That data is gold.
          </p>
          <p>
            <strong
              >I'm no expert when it comes to conducting research, but will always find a way to get
              it done.</strong
            >
            Connecting with users is simply too important a step to skip!
          </p>
        </div>
        <div class="stage__img">
          <Research class="dsn-img" />
        </div>
      </section>
      <section id="stage2" class="dsn__stage section page-width page-padding">
        <div class="stage__content" data-stage="2.">
          <h2 id="ideas" class="stage__heading">Ideas</h2>
          <p class="stage__subheading">Hypothesise</p>
          <p>
            This is where I take the findings and map out some opportunities they present. I think
            this is best done as a collaborative exercise. No one person comes up with ALL the good
            ideas in life, so get all the people and all the ideas out in the open!
          </p>
          <p>
            After a bit of impact-effort mapping, and depending on the business needs,
            <strong
              >this usually leaves you in a good place to start designing some specific solutions
              with specific goals</strong
            >.
          </p>
        </div>
        <div class="stage__img">
          <Ideas class="dsn-img" />
        </div>
      </section>
      <section id="stage3" class="dsn__stage section page-width page-padding">
        <div class="stage__content" data-stage="3.">
          <h2 id="design" class="stage__heading">Design</h2>
          <p class="stage__subheading">Create</p>
          <p>
            Yay, design time! It depends on the team I'm part of as to how involved I get here -
            sometimes I'm there as a designer, other times I'm purely in an engineering role. Either
            way,
            <strong
              >at the very least I like every project to have a well thought out journey map and
              some low-fi wireframes</strong
            >.
          </p>
          <p>
            If working with external stakeholders, or if a complete redesign is being proposed, it
            can be better to take more time here and flesh out really detailed designs. But often
            that's not necessary and basic designs will do.
          </p>
        </div>
        <div class="stage__img">
          <Design class="dsn-img" />
        </div>
      </section>
      <section id="stage4" class="dsn__stage section page-width page-padding">
        <div class="stage__content" data-stage="4.">
          <h2 id="prototype" class="stage__heading">Build</h2>
          <p class="stage__subheading">Prototype</p>
          <p>
            When I say build here, <strong>it doesn't always have to be in code</strong>. Sometimes
            building a clickable prototype in a design tool that you can take out to users is the
            best thing you can possibly do. It all depends on the project.
          </p>
          <p>
            If we're talkin' engineering though, again, I can have different levels of involvement
            here. Sometimes I write all the CSS or component markup, other times I dabble in
            JavaScript, and others I purely code review and do performance and accessibility
            auditing.
          </p>
          <p><strong>The point of this step is to make something testable. That's it.</strong></p>
        </div>
        <div class="stage__img">
          <Build class="dsn-img" />
        </div>
      </section>
      <section id="stage5" class="dsn__stage section page-width page-padding">
        <div class="stage__content" data-stage="5.">
          <h2 id="test" class="stage__heading">Test</h2>
          <p class="stage__subheading">Validate</p>
          <p>
            All this means is test it out. Get the new thing out in front of people and track their
            reactions.
          </p>
          <p>
            <strong
              >Remember those emotions and specific goals back at the start? That's what you measure
              against here.</strong
            >
            Does the new thing improve the experience of your users? Does the new thing meet
            business goals?
          </p>
          <p>
            I've done this via in-person focus groups and A/B tests (or A/B/C/D tests!), using tools
            like Hotjar and Google Optimize, but there's loads of ways to do it.
          </p>
        </div>
        <div class="stage__img">
          <Test class="dsn-img" />
        </div>
      </section>
      <section id="stage6" class="dsn__stage section page-width page-padding">
        <div class="stage__content" data-stage="6.">
          <h2 id="review" class="stage__heading">Review</h2>
          <p class="stage__subheading">Learn</p>
          <p>
            Sometimes you get lucky and the validation step proved your solution is 100% effective,
            job done. That's rarely the case. There's almost always a few small tweaks that can
            improve it.
          </p>
          <p>
            This is often the stage where final accessibility and usability improvements come in,
            for example.
          </p>
          <p>
            Make sure you review from an internal perspective too. What went well, what didn't? Can
            we refine the solution further? Any improvements that could go into the next sprint?
          </p>
          <p>
            <strong
              >This is all about teamwork and getting in the best position possible to start the
              next phase of work.</strong
            >
          </p>
        </div>
        <div class="stage__img">
          <Review class="dsn-img" />
        </div>
      </section>
    </div>
    <Contact class="page-header"/>
  </Layout>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
    }
  }
</static-query>

<script>
import PageHeader from '~/components/PageHeader.vue';
import Research from '~/assets/images/icons/1_research.svg';
import Ideas from '~/assets/images/icons/2_ideas.svg';
import Design from '~/assets/images/icons/3_design.svg';
import Build from '~/assets/images/icons/4_build.svg';
import Test from '~/assets/images/icons/5_test.svg';
import Review from '~/assets/images/icons/6_review.svg';
import Contact from '~/components/Contact.vue';

export default {
  metaInfo() {
    return {
      title: 'Design Process',
      link: [
        {
          rel: 'canonical',
          href: `${this.$static.metadata.siteUrl}/design-process/`,
        },
      ],
      meta: [
        {
          property: 'og:title',
          content: 'Design Process | ' + this.$static.metadata.siteName,
        },
        {
          name: 'twitter:title',
          content: 'Design Process | ' + this.$static.metadata.siteName,
        },
        {
          itemprop: 'name',
          content: 'Design Process | ' + this.$static.metadata.siteName,
        },
      ],
    };
  },
  components: {
    PageHeader,
    Research,
    Ideas,
    Design,
    Build,
    Test,
    Review,
    Contact,
  },
};
</script>

<style lang="scss">
.dsn-img {
  width: 30vw;
  max-width: 180px;

  @include media-up(small) {
    max-width: 240px;
  }
  @include media-up(large) {
    max-width: 280px;
  }
}

.dsn__stage {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  background: $neutral-50;

  > * {
    flex: 0 1 50%;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
  }

  &:nth-of-type(even) {
    @include media-up(medium) {
      flex-direction: row;
      align-items: center;

      &:before {
        background: $neutral-150;
        opacity: 1;

        clip-path: polygon(0 100%, 68vw 100%, 48vw 0, 0 0);
      }

      .stage__img {
        text-align: right;
      }
    }
  }

  &:nth-of-type(odd) {
    @include media-up(medium) {
      flex-direction: row-reverse;
      align-items: center;

      &:before {
        background: $neutral-200;
        opacity: 0.5;

        clip-path: polygon(28vw 100%, 100% 100%, 100% 0, 48vw 0);
      }
    }
  }
}

.stage {
  &__heading {
    margin-bottom: 0;
    padding-left: 3.25rem;
    font-size: $header3;
    font-size: $header3-clamp;

    @include media-up(small) {
      padding-left: 0;
    }
  }

  &__subheading {
    margin-bottom: 1.5rem;
    padding-left: 3.25rem;

    @include small-caps-title;
    @include media-up(small) {
      padding-left: 0;
    }
  }

  &__content {
    position: relative;
    z-index: 1;

    @include media-up(small) {
      padding-left: 3.25rem;
      /* padding-left: clamp(3rem, calc(6vw + 1px), 3.75rem); */
    }

    &:before {
      content: attr(data-stage);
      position: absolute;
      top: -0.075em;
      left: 0;
      color: $blue-600;
      font-size: 3.25rem;
      /* font-size: clamp(3rem, calc(6vw + 1px), 3.75rem); */
      line-height: 1;

      @include font-heading;
    }
    p {
      margin-bottom: 1em;
      max-width: 40ch;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }

  &__img {
    z-index: 1;
    color: $neutral-200;
  }
}
</style>
