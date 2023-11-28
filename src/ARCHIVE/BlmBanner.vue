<template>
  <aside class="blm" aria-label="campaigns">
    <div class="blm__inner page-padding page-width">
      <p>
        Grace Snow Design supports
        <a
          href="https://blacklivesmatter.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="link no-external-icon"
          >Black Lives Matter<span class="sr-only"> (Opens in a new tab)</span></a
        >
      </p>
    </div>
  </aside>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'BlmBanner',
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss">
.blm {
  background: #131718; // special
  color: #fff;
  font-size: $smallText;
  font-size: $smallText-clamp;
  padding: 1.2rem 0;
  z-index: 20;

  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    * {
      margin: 0;
    }
  }

  a {
    color: $accent-100;
    white-space: nowrap;

    &:after {
      background: $blue-1000;
    }

    &:hover {
      color: $accent-200;
    }
  }
}
</style>
