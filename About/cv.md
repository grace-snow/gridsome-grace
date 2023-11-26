---
date: 2023-11-26
slug: resume
---

<hgroup>

<p class="ribbon">Resumé</p> 
<h1>Grace Snow</h1>
</hgroup>

<p>A passionate Accessibility Specialist and Frontend Developer looking for a new role working with a team to create <em>truly</em> inclusive digital experiences.</p>

<ul class="no-list-style">
  <li><strong>Email:</strong> <a href="mailto:graceSnowDesign@gmail.com">graceSnowDesign@gmail.com</a></li>
  <li><strong>My site:</strong> <a href="https://gracesnowdesign.co.uk">gracesnowdesign.co.uk</</li>
  <li><strong>Frontend blog:</strong> [FEDmentor.dev](https://fedmentor.dev)</li>
</ul>

<h2>Skills</h2>

<h3>Technical skills:</h3>
<ul class="">
    <li>HTML5, CSS3/Sass, JavaScript and Vue.js</li>
    <li>Web Content Accessibility Guidelines (WCAG) 2.1 and 2.2</li>
    <li>ARIA specification and implementation</li>
    <li>Assistive Technologies and Adaptive Strategies (NVDA, VoiceOver, Speech Recognition etc)</li>
    <li>Static Site Generators (Eleventy, Nuxt, Gridsome)</li>
    </li>Pattern libraries and stories (Fractal, Histoire and Storybook)</li>
    <li>Design tools (Figma and Affinity Design), including optimised animatable SVGs</li>
    <li>Workflow tools (JIRA, Azure, Netlify, Vercel)</li>
    <li>Agile and Waterfall Methodologies</li>
    <li>Code Standards and Frontend tooling (Git, Webpack, Vite, Prettier, EsLint etc)</li>
    <li>Technical documentation (in Confluence, client-facing documents and in-code)</li>
</ul>

<h3>Soft skills</h3>
<ul>
  <li>Clear and Effective Communication</li>
  <li>Strategic Thinking</li>
  <li>High Attention to Detail</li>
  <li>Applying Accessibility Maturity Models</li>
  <li>Problem Solving and Collaboration</li>
  <li>Leadership and Management</li>
  <li>Training and Mentoring</li>
  <li>Public Speaking</li>
</ul>

<h2>Experience</h2>

<p><strong>Agency clients and previous work projects cover multiple industry sectors including utilities, engineering, charity and e-commerce:</strong> JCB, SSEN Transmission, SSEN Distribution, United Utilities, SES Water, Universities Superannuation Scheme (USS), British Red Cross, Coal Miners Pension Trust, Love2Shop, High Street Vouchers, Croda, Element Materials, Christians Against Poverty, Benchmark Architects, ENW, L1 Renewables Slatewood Financing;</p>

<h3>Accessibility Consultancy</h3>
<ul>
  <li>Conducted accessibility and usability analysis</li>
  <li>Produced accompanying internal and client-facing reports</li>
  <li>Developed a prioritised backlog of issues based on severity of impact, along with recommended remediation steps and effort to fix</li>
  <li>Oversaw a reduction in the number and severity of WCAG compliance failures (e.g. Since onboarding, JCB has gone from 71, including critical and high severity fails, to 6 low-impact issues)</li>Advised on public-facing accessibility statements</li>Assisted with UI design for new features in a consulting capacity
  <li>Wrote accessibility-related acceptance criteria and test steps to assist with the QA process</li>
  <li>Tested bug fixes using assistive technology or device accessibility settings</li>
  <li>Offered accessibility governance throughout design and delivery phases of numerous projects</li>
</ul>

<h3>Front end Development</h3>
<ul>
  <li>Built accessible reusable UI components, most recently for two Coal Miners Pension Trust sites</li>
  <li>Reviewed team Pull Requests with particular attention to accessibility</li>
  <li>Provided essential governance during UX design to encourage streamlined development</li>
  <li>Wrote technical documentation, primarily around Vue.js components and accompanying APIs</li>
  <li>Lead team training on topics including accessible HTML, ARIA usage and accessibility testing</li>
  <li>Bug triage and fixes as required, largely focused on visual UI and accessibility issues</li>
  <li>Built out pattern libraries and stories using Fractal and Histoire.</li>
  <li>Worked with large scale enterprise CMS systems, including Optimizely, Sitecore and Umbraco</li>
</ul> 

<h3>Leadership & Change Management</li>

<ul>
  <li>Lead an internal cross-disciplinary Accessibility Working Group</li>
  <li>Set up sub-teams and mini-projects to drive departmental changes</li>
  <li>Contributed to policies including test approach, code standards and third-party procurement</li>
  <li>Enhanced bid proposals by providing comprehensive responses that underscored our steadfast commitment to universal design principles and accessibility compliance</li>
  <li>Surveyed staff to measure progress against defined accessibility maturity goals</li>
  <li>Started working towards ISO-30071-1 Digital Accessibility Standard</li>
</ul>

<section v-if="Jobs.length" id="jobs" class="section page-padding page-width jobs">
      <div class="jobs__inner">
        <h2 class="equals-decal">Job History</h2>
        <p>
          <strong>The best info about my roles is over on my </strong
          ><a href="/about/resume/">online Resumé</a>
        </p>
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
              <p class="job__desc">{{ job.jobDesc }}</p>
            </article>
          </li>
        </ul>
      </div>
    </section>

<h2>Awards and Certifications</h2>

<ul>
  <li>Most Passionate” Award (peer-voted internal award)</li>
  <li>International Association of Accessibility Professionals (IAAP) member</li>
  <li>Pending exam results for Certified Practitioner in Accessibility Core Competencies (CPACC)</li>
  <li>Actively studying for Web Accessibility Specialist (WAS)</li>
</ul>

<h2>Recommendations</h2>

<p>
    See my recommendations on [LinkedIn](http://www.linkedin.com/in/gracesnow)<br/>
    <strong>References available on request.</strong>
</p>
