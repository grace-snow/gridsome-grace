---
projectName: "The 5 Minute Lesson Plan"
year: 2018
sortOrder: 1
slug: "5mlp"

heroTitle: "Web app to help teachers plan effective lessons in just 5 mins"
heroImage: "/projects/hero-5mlp-opt.png"
heroImageAlt: "iPhone screen displaying a digital 5 minute lesson plan"

role: "Lead Product Designer & Front End"
projectLength: "3 months (to Beta Test)"
keyTech: [Adobe XD, CSS Grid, Vue.js]

listingTitle: "Helping teachers plan"
listingDesc: "A mobile-first web app to ease the burden of lesson planning on teachers."
listingImage: "/projects/5mlp-logo.svg"
listingImageAlt: "5 Minute Lesson Plan logo"

liveLink: "https://app.5minutelessonplan.co.uk/register"
liveLinkText: "Try it for free!"
caseStudy: true
---

<h2 class="p-main-heading">
	Project Background
</h2>

<div class="block">
	<h3>The Brief</h3>
	<p class="lede">Transform the 5 minute lesson plan template into a mobile-friendly digital tool</p>
</div>

<p>
	In summer 2018, I was tasked with completely re-designing an existing online lesson planning tool for teachers based around the hugely popular 5 Minute Lesson Plan Word document template. 
</p>

<p>
	Several attempts had been made to digitize the 5 Minute Lesson Plan template before (from 2014 onwards). However, business needs at the time had led to it being incorporated into another app that was primarily used by school managers (not teachers). 
</p>
<p>
	This led to a <strong>confusing user journey</strong> where teachers would subscribe under one branded website but had to log in via a separate (and potentially unknown) product's website.
</p>

<h4 class="img-grid-title">
	Previous versions of the 5 Minute lesson Plan:
</h4>

<div class="img-grid img-grid--1-2 img-grid--pad-all">
<div class="img1">

![3 iterations of the 5 minute lesson plan over the years](./images/5mlp/5mlp_old-to-new.png)

</div><div class="img2">

![The very busy plan dashboard inside the previous version of the tool](./images/5mlp/5mlp_old1.png)

</div><div class="img3">

![The customisable template inside the previous version of the tool](./images/5mlp/5mlp_old2.png)

</div>
</div>

<p>
	<strong>Subscription renewal rates had slowed to a trickle</strong> for the existing online tool and feedback surveys revealed a frustrated user-base.
</p>
<h4>
	Pain points:
</h4>
<ul>
	<li>A confusing sign-up / login journey </li>
	<li>Complicated template options </li>
	<li>Confusing 'community sharing' feature</li>
	<li>Didn't work on mobile devices</li>
	<li>More expensive than other single-purpose tools for teachers</li>
</ul>

<div class="block p-section">
	<h3>Goals & Requirements</h3>
	<p class="lede">Fix the problems from previous versions: Make it simple, affordable and responsive</p>
</div>

<p>In consultation with stakeholders, I narrowed down a list of requirements.</p>

<div class="auto-grid">
	<div>
		<h4>Essentials</h4>
		<ul>
			<li>Stand-alone web-based app</li>
			<li>Works on mobiles, tablets and desktop</li>
			<li>Users can download a one-page pdf of their lesson plan</li>
			<li>5 minutes to complete a plan</li>
		</ul>
	</div>
	<div>
		<h4>Desirables</h4>
		<ul>
			<li>New template but recognisable</li>
			<li>Include best practice guidance </li>
			<li>Not specific to UK education framework</li>
			<li>Free version + subscription extras</li>
		</ul>
	</div>
</div>

<p>
	It was important to keep <a href="https://www.teachertoolkit.co.uk/" target="_blank" rel="noopener noreferrer">TeacherToolkit</a>, the 5 Minute Lesson Plan's founder happy, especially during the design phase. <strong>Existing users</strong> also needed to be kept engaged if we were to keep them as customers in future.
</p>
<p>
	One more consideration: Angel Solutions was footing the whole bill for this build and offering a generous commission back to the founder once the product went live. <strong>We had to keep costs in mind!</strong>
</p>

<div id="role" class="section p-section full-bleed">
	<div class="limit-width h-center page-padding">
		<h2 class="p-main-heading">My Role: Project Lead</h2>
		<p>
			<strong>Despite my expansive roles on this one, it really was a team effort.</strong> I had the pleasure of working closely with a very talented developer called <a href="https://www.linkedin.com/in/ryan-simpson-942260138/" target="_blank" rel="noopener noreferrer" >Ryan Simpson</a> throughout this project. We also had help along the way from the <a href="https://www.angelsolutions.co.uk/" target="_blank" rel="noopener noreferrer" >Angel Solutions</a> team - you know who you are.
		</p>
		<h3 class="sr-only">More about my role</h3>
		<div class="auto-grid">
			<div role="presentation">
				<div class="block">
					<h4>Product Design</h4> 
					<p>
						I was the only designer. After initial sign-off, I held regular design review sessions with the wider design team, which was invaluable in refining and improving the UI.
					</p>
				</div>
			</div>
			<div role="presentation">
				<div class="block">
					<h4>User Research</h4>
					<p>
						I conducted, collated and presented to key stakeholders.
					</p>
				</div>
			</div>
			<div role="presentation">
				<div class="block">
					<h4>Front End</h4>
					<p>I wrote all CSS, most HTML and some JavaScript in Vue.js templates. </p>
				</div>
			</div>
			<div role="presentation">
				<div class="block">
					<h4>Tech Stack Decisions</h4>
					<p>
						Alongside Ryan, we chose to use Vue.js with webpack on the front end
					</p>
				</div>
			</div>
		</div>
		<p>
			<strong>Note:</strong> Other talented folk handled all the design, development and content for the marketing website. Kudos! :)
		</p>
	</div>
</div>

<h2 class="p-main-heading">
	Step-by-step process
</h2>

<div class="block ">
	<h3 class="lede steps__title">
		Research
	</h3>
	<p class="small-caps-title steps__time">1-2 weeks</p>
</div>

<p>
	Although no budget was assigned for research, it's too essential to skip! I used quick Typeform surveys to get some design steer from teachers in our target user-base, both existing and potential customers.
</p>
<blockquote class="float-right blockquote">
	I want a template that's easy to follow, and easy to share with my observer or colleagues
	<footer>&mdash; A user persona statement</footer>
</blockquote>

<p class="clearfix">
	From the research, I was able to crystalise the problems we were trying to solve and understand more about the lesson planning process. I even read the Mark, Plan Teach book by Teacher Toolkit to better understand those we were trying to help.
</p>

<div class="research__matters box one-half--500-up">
	<h4>What matters most to our users:</h4>
	<ul>
		<li>Speed of planning</li>
		<li>Ease of sharing</li>
	</ul>
</div>

<div class="block p-section">
	<h3 class="lede steps__title">
		Design & Wireframe
	</h3>
	<p class="small-caps-title steps__time">
		4 weeks
	</p>
</div>
<p>
	I prioritised designing the lesson plan template and how it would look on different devices, as the whole product hinged on that.
</p>

<h4 class="img-grid-title">
	Some early designs:
</h4>

<div class="img-grid dsn-img-grid">
<div class="desk1">

![Desktop wireframe of lesson plan screen](./images/5mlp/5mlp_wireframe1.png)

</div>
<div class="mob1">

![Mobile wireframe of lesson plan screen](./images/5mlp/5mlp_wireframe2.png)

</div>
<div class="desk2">

![An early lo-fi design for lesson plan screen, with alternate layout and small icons on boxes](./images/5mlp/5mlp_early1.png)

</div>
<div class="desk3">

![A higher fidelity design of lesson plan screen, very similar to the end product in layout](./images/5mlp/5mlp_early2.png)

</div>
</div>

<p>
	<strong>In retrospect, I should have spent more time at this stage mapping out the user journeys and nailing down the feature list with the product owners.</strong>
</p>
<p>
	As it was, we ended up starting the build with features not yet agreed.
</p>

<h4 class="img-grid-title">
	Basic journey map:
</h4>

![Simple lesson plan journey map](./images/5mlp/5mlp_journey.png)

<h4>Research continued&hellip;</h4>
<p>
	Throughout this design phase, I sought out design feedback as much as possible, kept surveying users, and ran impromptu focus groups whenever teachers and education leaders were visiting the office.
</p>

<div class="block p-section">
	<h3 class="lede steps__title">
		Build 
	</h3>
	<p class="small-caps-title steps__time">
		2 months <span class="meta">(alongside other projects)</span>
	</p>
</div>

**Ryan and I chose to use Vue.js as the backbone to this project**, for speed and to give it the potential to become a progressive web app with service workers (for offline access) at a later date.

My primary role was to write mobile-first modular scss using the BEM naming framework (so the stylesheet would feel similar to our other products when colleagues needed to work on it), end embracing modern CSS techniques.

For example, the lesson plan template lended itself easily to CSS Grid. Anything that doesn't support CSS Grid, like older Internet Explorer, received a flexbox fallback.

<div class="auto-grid">
	<div class="">
		<h4>I <span class="icon-wrap icon-wrap--inline"><svg aria-hidden="true" focussable="false" alt="love heart" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" ><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg><span class="sr-only">love</span></span> CSS&hellip;</h4>
		<p>
			This was a fantastic opportunity for me to solidify and build on my front end knowledge. <strong>I pushed myself to contribute to writing and debugging JavaScript, despite having very little experience</strong>, and tried to learn as much as I could from others.
		</p>
		<p>
			Additionally, this was my first experience using a modern JavaScript framework and I was delighted with it! 
		</p>
	</div>
	<div class="shrink auto">
		<div class="box">
			<h4>
				Key learnings: 
			</h4>
			<ul>
				<li>CSS Grid</li>
				<li>Vue.js basics</li>
				<li>Print to pdf</li>
				<li>Git in the console</li>
			</ul>
		</div>
	</div>
</div>

<div class="block p-section">
	<h3 class="lede steps__title">
		Beta Test
	</h3>
	<p class="small-caps-title steps__time">
		4 months <span class="meta">(in length)</span>
	</p>
</div>

<p class="mb-small">
	In October 2018, we launched a free version of the app to our beta group and set about getting their feedback while continuing to design and develop features, including:
</p>
<ul>
	<li>Subscription & payment screens</li>
	<li>Free trial and renewal reminders</li>
	<li>Marketing automated email strategies</li>
	<li>System messages and help</li>
</ul>

<h4 class="img-grid-title">
	Beta feedback:
</h4>

<div class="auto-grid">
<div class="">

![Feedback results showing 4.6/5 stars on average](./images/5mlp/5mlp_feedback.png)

</div>
<div class="shrink">

<div class="box">
	<h4>
		Beta summary: 
	</h4> 
	<ul>
		<li>200+ users</li>
		<li>4.6/5 average rating</li>
		<li>99% accessible</li>
		<li>90% mobile usage</li>
	</ul>
</div>

</div>
</div>

<h4 class="">
	Full launch
</h4>

<p class="">
	The <a href="https://app.5minutelessonplan.co.uk/register" target="_blank" rel="noopener noreferrer" class="link">new 5 Minute Lesson Plan</a> launched in Feb 2019, <strong>gained 4000+ paying subscribers within the first 2 months</strong> and maintained an impressive 5-star review rating throughout that time. 
</p>

<div class="block p-section">
	<h3 class="lede steps__title">
		Review & learn
	</h3>
	<p class="small-caps-title steps__time">
		Ongoing
	</p>
</div>

<blockquote class="float-right blockquote">
	More important than anything else, was discovering how much I <strong>love</strong> working on products that are <strong>aiming to help people</strong>.
	<footer>
	&mdash; Grace
	</footer>
</blockquote>

<p class="clearfix">
	On a practical level, I learnt so much from this project. From design, to teamwork, to presentation skills, to CSS and JavaScript&hellip; I can confidently say my skills improved in every area.
</p>

<h4 class="mb">
	Things I would do differently
</h4>
<div class="auto-grid auto-grid--1-2">
	<div>
		<div class="block">
			<h5>
				More wireframes
			</h5>
			<p>
				I started designing some screens in the browser. Not a great idea. Even basic wireframes would have saved me time here.
			</p>
		</div>
	</div>
	<div>
		<div class="block">
			<h5>
				Confirm an MVP Feature list
			</h5>
			<p>
				Some mis-communication with a decision-maker meant we lost time developing features that weren't needed.
			</p>
		</div>
	</div>
	<div>
		<div class="block">
			<h5>
				Design filters
			</h5>
			<p>
				I should have gone with my gut and built filters into the lesson plan index to make them easier to find. In fact, I would design that whole screen differently!
			</p>
		</div>
	</div>
</div>
