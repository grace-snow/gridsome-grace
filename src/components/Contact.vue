<template>
  <section id="contact" class="site-contact section page-padding">
    <h2 class="equals-decal">Drop me a line&hellip;</h2>
    <form
      id="contactForm"
      class="form"
      name="contact"
      method="post"
      v-on:submit.prevent="handleSubmit"
      action="/success/"
      data-netlify="true"
      data-netlify-honeypot="honeypot-field">
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label> Don’t fill this out: <input name="honeypot-field" /> </label>
      </p>
      <div class="form__item">
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          v-model="formData.message"
          cols="30"
          rows="5"
          placeholder="Hi Grace,"
          required></textarea>
      </div>
      <div class="form__item">
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          autocomplete="name"
          type="text"
          v-model="formData.name"
          required
          title="Say who's sending this" />
      </div>
      <div class="form__item">
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          autocomplete="email"
          type="email"
          v-model="formData.email"
          required />
      </div>
      <button type="submit" class="btn">Send</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      formData: {},
      hasFocus: false,
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push('/thanks'))
        .catch((error) => alert(error));
    },
  },
};
</script>

<style lang="scss">
$form-width--small-up: 60vw;
$form-width--medium-up: 40vw;
$form-width-max: 600px;

.site-contact {
  // chromium only - may speed up page load
  content-visibility: auto;

  &.border-top {
    border-top: 6px solid rgba($neutral-200, 0.3);
  }
}

.form {
  @include media-up(small) {
    width: $form-width--small-up;
  }
  @include media-up(medium) {
    width: $form-width--medium-up;
    max-width: $form-width-max;
  }
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: $blue-600;
  color: $text-secondary;
  font-size: $smallText;
  font-weight: $weight-semibold;
}

textarea {
  width: 100%;
  max-width: 100%;
  box-shadow: $box-shadow;
  resize: none;

  @include media-up(small) {
    width: $form-width--small-up;
  }
  @include media-up(medium) {
    width: $form-width--medium-up;
    max-width: $form-width-max;
  }
}

input {
  width: 100%;
  max-width: map-get($breakpoints, tiny);

  @include media-up(small) {
    width: 42vw;
  }
  @include media-up(medium) {
    width: 28vw;
  }
}

.form__item {
  display: inline-block;
  display: block;
  margin-bottom: 2rem;

  input,
  textarea {
    padding: 0.5em 0.75em;
    background: $neutral-150;
    border: 0;
    border-left: 5px solid $blue-500;
    border-radius: 0;
    box-shadow: $box-shadow;
    color: $text-secondary;

    &:focus {
      border-color: $blue-200;
      outline: none;

      @include focus-outline;
    }
  }
}
</style>
