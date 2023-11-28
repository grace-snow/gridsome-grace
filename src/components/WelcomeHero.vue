<template>
  <section>
    <div class="page-padding page-width section welcome-outer">
      <div class="welcome-inner">
        <h1 class="welcome__h1">
          <span class="welcome__h1-one">The Web is for</span>
          <span class="welcome__h1-two">Everyone</span>
        </h1>
        <h2 class="welcome__h2">I care about making web stuff that's easy to use and inclusive.</h2>
      </div>
      <div class="welcome-cta">
        <h3 class="welcome-cta__heading">Want to work together?</h3>
        <div class="welcome-cta__content">
          <p class="welcome-cta__link-intro">Contact me via:</p>
          <ul class="welcome-cta__links">
            <li>
              <a href="mailto:gracesnowdesign@gmail.com" class="link">Email</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gracesnow/"
                target="_blank"
                rel="noopener noreferrer"
                class="link no-external-icon"
                >LinkedIn</a
              >
            </li>
            <li>
              <a
                href="https://twitter.com/gracesnow/"
                target="_blank"
                rel="noopener noreferrer"
                class="link no-external-icon"
                >Twitter</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Welcome',
};
</script>

<style lang="scss">
/* bg patterns */
.welcome-outer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 50vh;

  @include media-up(large) {
    min-height: calc(100vh - #{rem(70px)});
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    right: 0;
    z-index: -1;
  }

  &:before {
    top: 0;
    background: $neutral-100;
    opacity: 0.8;
    clip-path: polygon(0 100%, 100% 100%, 100% 45%);
    height: 100%;
    width: 100%;

    @include media-up(small) {
      height: 88vh;
      width: 34vw;
      clip-path: polygon(0 0, 100% 100%, 100% 0);
    }
  }

  @include media-up(small) {
    &:after {
      bottom: 0;
      background: $neutral-200;
      opacity: 0.74;
      height: 100vh;
      width: 44vw;
      clip-path: polygon(100% 0, 0% 100%, 100% 100%);
      z-index: -2;
    }
  }
}

.welcome__h1 {
  color: $blue-600;
  font-size: unset;
  letter-spacing: 0;
  text-transform: uppercase;
  line-height: 0.85;
  margin-bottom: 1em;
  position: relative;
}

.welcome__h1-one {
  font-size: 4.5vw;
  font-size: clamp($header3, calc(4vw + 1px), 4.5rem);
}

.welcome__h1-two {
  position: relative;
  display: block;
  margin-left: -0.75vw;
  letter-spacing: -0.2pt;
  font-size: 12vw;
  font-size: clamp($jumbo1, calc(11vw + 1px), 11rem);

  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 50vw;
    left: -50vw;
    background: currentColor;
    opacity: 0.3;
    height: 32%;
  }

  &:before {
    top: 0.125em;
  }

  &:after {
    bottom: 0.05em;
  }
}

.welcome__h2 {
  max-width: 33ch;
  margin-bottom: 10vh;
  font-size: $header2;
  font-size: clamp(1.125rem, calc(3vw + 1px), 2rem);
}

.welcome-cta__heading {
  font-size: 1.75rem;
  font-size: clamp(1.125rem, calc(2vw + 1px), 1.5rem);
  margin-bottom: 0.5rem;
}

.welcome-cta__content {
  font-size: 1.25rem;
  font-size: clamp(1rem, calc(1.5vw + 1px), 1.2rem);
}

.welcome-cta__link-intro {
  margin-right: 20px;
  margin-bottom: 0.5em;
  line-height: $line-height-small;
  display: inline-block;
}

.welcome-cta__links {
  display: block;
  @include list--chevrons;

  @include media-up(small) {
    display: inline-block;
    @include list--inline-divider;
  }
}
</style>
