<template>
  <Layout>
    <section class="hero">
      <h1>Design Process</h1>
      <div>[steps animation goes here]</div>
    </section>
    <section>
      <div id="step1">
        <h2 id="research">1. Empathise</h2>
        <p>Whether it's guerrilla testing, feedback surveys, analytics data, purchasing stats, or good old fashioned online reviews, there's always a way to find out how people feel using your web products. That data is gold.</p>
        <p><strong>I'm no expert when it comes to conducting research, but will always find a way to get it done.</strong> Connecting with users is simply too important a step to skip!</p>
      </div>
      <div id="step2">
        <h2 id="ideas">2. Hypothesise</h2>
        <p>This is where I take the findings and map out some opportunities they present. I think this is best done as a collaborative exercise. No one person comes up with ALL the good ideas in life, so get all the people and all the ideas out in the open!</p>
        <p>After a bit of impact-effort mapping, and depending on the business needs, <strong>this usually leaves you in a good place to start designing some specific solutions with specific goals</strong>.</p>
      </div>
      <div id="step3">
        <h2 id="design">3. Design</h2>
        <p>Yay, design time! It depends on the team I'm part of as to how involved I get here - sometimes I'm there as a designer, other times I'm purely in an engineering role. Either way, <strong>at the very least I like every project to have a well thought out journey map and some low-fi wireframes</strong>.</p>
        <p>If working with external stakeholders, or if a complete redesign is being proposed, it can be better to take more time here and flesh out really detailed designs. But often that's not necessary and basic designs will do.</p>
      </div>
      <div id="step4">
        <h2 id="prototype">4. Build</h2>
        <p>When I say build here, <strong>it doesn't always have to be in code</strong>. Sometimes building a clickable prototype in a design tool that you can take out to users is the best thing you can possibly do. It all depends on the project.</p>
        <p>If we're talkin' engineering though, again, I can have different levels of involvement here. Sometimes I write all the CSS or component markup, other times I dabble in javascript, and others I purely code review and do performance and accessibility auditing.</p>
        <p><strong>The point of this step is to make something testable. That's it.</strong></p>
      </div>
      <div id="step5">
        <h2 id="test">5. Validate</h2>
        <p>All this means is test it out. Get the new thing out in front of people and track their reactions.</p>
        <strong>Remember those emotions and specific goals back at the start? That's what you measure against here.</strong> Does the new thing improve the experience of your users? Does the new thing meet business goals?</p>
        <p>I've done this via in-person focus groups and A/B tests (or A/B/C/D tests!), using tools like Hotjar and Google Optimise, but there's loads of ways to do it.</p>
      </div>
      <div id="step6">
        <h2 id="review">6. Review</h2>
        <p>Sometimes you get lucky and the validation step proved your solution is 100% effective, job done. That's rarely the case. There's almost always a few small tweaks that can improve it.</p>
        <p>This is often the stage where final accessibility and usability improvements come in, for example.</p>
        <p>Make sure you review from an internal perspective too. What went well, what didn't? Can we refine the solution further? Any improvements that could go into the next sprint?</p>
        <p><strong>This is all about teamwork and getting in the best position possible to start the next phase of work.</strong></p>
      </div>
    </section>
    <Contact id="contact" />
  </Layout>
</template>

<script>
import Contact from "~/components/Contact.vue";

export default {
  metaInfo: {
    title: "Design Process"
  },
  components: {
    Contact
  }
};
</script>
