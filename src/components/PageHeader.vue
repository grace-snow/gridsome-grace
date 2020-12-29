<template>
  <header class="page-header section page-width page-padding">
    <div role="presentation">
      <h1 class="equals-decal page__title" :class="hasIntroSlot ? 'has-subheading' : ''">
        {{ pageTitle }}
      </h1>
      <p v-if="hasIntroSlot" class="page__intro">
        <slot name="intro"></slot>
      </p>
    </div>
    <slot></slot>
  </header>
</template>

<script>
export default {
  props: {
    pageTitle: String,
    bgShapes: String,
  },
  computed: {
    hasIntroSlot() {
      return !!this.$slots.intro;
    },
  },
};
</script>

<style lang="scss">
.page-header {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 3.75rem);
  background: $neutral-50;

  /* bg shapes */
  &:before,
  &:after {
    position: absolute;
    bottom: 0;
    content: '';
    height: 100%;
    width: 100%;
    right: 0;
    mix-blend-mode: multiply;
    opacity: 0.4;
  }

  &:before {
    top: 0px;
    background: $neutral-200;
    clip-path: polygon(100% 25%, 100% 0%, 65% 0%);

    @include media-up(small) {
      background: $neutral-100;
      top: 0;
      height: 88vh;
      clip-path: polygon(68vw 0, 100% 100%, 100% 0);
      opacity: 0.8;
    }
  }

  &:after {
    clip-path: polygon(0px 100%, 0px 70%, 50% 100%);
    background: $neutral-100;
    opacity: 0.8;

    @include media-up(small) {
      opacity: 0.4;
      background: $neutral-200;
      clip-path: polygon(100% 0, 60vw 100%, 100% 100%);
    }
  }

  &.no-min-h {
    min-height: 0;
  }

  /* optional no-bg shapes */
  &.no-bg {
    background: #fff;

    &:before,
    &:after {
      display: none;
    }
  }
}

.page {
  &__title {
    font-size: $jumbo4;
    font-size: $jumbo4-clamp;
    margin-bottom: 2.5rem;

    &.has-subheading {
      margin-bottom: 1.5rem;
    }
  }

  &__intro {
    font-size: $header5;
    font-size: $header5-clamp;
    font-size: clamp(1rem, calc(3vw + 1px), $header5);
    max-width: 36ch;
    margin-bottom: 2rem;
  }
}
</style>
