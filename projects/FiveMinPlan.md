---
projectName: 'The 5 Minute Lesson Plan'

title: 'Helping teachers plan lessons in just 5 minutes'
listingTitle: 'Helping teachers plan lessons in just 5 minutes'
excerpt: 'A mobile-first web app to ease the burden of lesson planning on teachers.'
year: 2018

heroTitle: 'Web app to help teachers plan effective lessons in just 5 mins'
role: 'Lead Product Designer & Front End'
projectLength: '3 months (to Beta Test)'
keyTech: [Adobe XD, CSS Grid, Vue.js]
team: [2 Product Owners, 1 Designer and Front End, 1 Full Stack Developer, 1 Lifecycle Manager, 2 Marketing Designers]
heroImage: '/iphone-5mlp-1.png'
image: '/iphone-5mlp-1.png'
image2: '/iphone-5mlp-1.png'
heroImageAlt: 'iPhone screen displaying a digital 5 minute lesson plan'

slug: '5mlp'
listingImage: '/Home Page - Five Minute Lesson Plan.png'
listingImageAlt: 'app'
sortOrder: 1
---

<div class="p-section-headerxxx page-padding-bleedxxx">
	<h2 class="p-main-heading">
		Project Background
	</h2>
</div>

<div class="block">
	<h3>The Brief</h3>
	<p class="lede">Transform the 5 minute lesson plan template into a mobile-friendly digital tool</p>
</div>

<p>
	In summer 2018, I was tasked with completely re-designing an existing online lesson planning tool for teachers based around the hugely popular 5 Minute Lesson Plan Word document template. 
</p>

![Progression of the 5 Minute Lesson Plan: Word template, Digital template inside Perspective, Customisable template inside Perspective, Standalone web app](./images/5mlp/5mlp-evolution.png)

<p>
	Attempts had been made to digitize the 5 Minute Lesson Plan template before (in 2014). However, business needs at the time had led to it being incorporated into another app that was primarily used by school managers (not teachers). 
</p>
<p>
	This led to a <strong>confusing user journey</strong> where teachers would subscribe under one branded website but had to log in via a separate (and potentially unknown) product's website.
</p>

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
	<div class="limit-width page-padding">
		<h2 class="p-main-heading">My Role: Project Lead</h2>
		<p>
			<strong>Despite my expansive roles on this one, it really was a team effort.</strong> I had the pleasure of working closely with a very talented developer called <a href="" target="_blank" rel="noopener noreferrer" >Ryan Simpson</a> throughout this project. We also had help along the way from the <a href="" target="_blank" rel="noopener noreferrer" >Angel Solutions</a> team - you know who you are.
		</p>
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
					<p>I wrote all CSS, most HTML and some javascript in Vue.js templates. </p>
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


<div class="p-section p-section-headerxxx page-padding-bleedxxx">
	<h2 class="p-main-heading">
		Step-by-step process
	</h2>
</div>

<!-- <div class="steps"> -->

<div class="block ">
	<h3 class="lede steps__title">
		Research
	</h3>
	<p class="small-caps-title steps__time">1-2 weeks</p>
</div>

<p>
	Although no budget was assigned for research, it's too essential to skip! I used quick Typeform surveys to get some design steer from teachers in our target user-base, both existing and potential customers.
</p>
<blockquote>
	I want a template that's easy to follow and easy to share with my observer or other colleagues
	<footer>&mdash; User persona excerpt</footer>
</blockquote>

<p>
	From the research, I was able to crystalise the problems we were trying to solve and understand more about the lesson planning process. I even read the Mark, Plan Teach book by Teacher Toolkit to better understand those we were trying to help.
</p>

<div class="research__matters">
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

<div class="dsn-img-grid">
<div class="desk2">

![alt text](./images/5mlp/5mlp_wireframe1.png)

</div>
<div class="mob1">

![alt text](./images/5mlp/5mlp_wireframe2.png)

</div>
<div class="desk3">

![alt text](./images/5mlp/5mlp_early1.png)

</div>
<div class="desk4">

![alt text](./images/5mlp/5mlp_early2.png)

</div>
</div>

<p>
	In retrospect, I should have spent more time at this stage mapping out the user journeys and nailing down the feature list with the product owners.
</p>
<p>
	As it was, we ended up starting the build with features not yet agreed.
</p>

![Simple lesson plan journey map](./images/5mlp/5mlp_journey.png)
<figcaption>caption</figcaption>

<h4>Research continued&hellip;</h4>
<p>
	I sought out design feedback as much as possible, kept surveying users, and ran impromptu focus groups whenever teachers and education leaders were visiting the office.
</p>

<div class="block p-section">
	<h3 class="lede steps__title">
		Build 
	</h3>
	<p class="small-caps-title steps__time">
		2 months <span class="meta">(alongside other projects)</span>
	</p>
</div>
<p>
	Ryan and I chose to use Vue.js as the backbone to this project, for speed and to give it the potential to become a progressive web app with service workers for offline access at a later date. 
</p>
<p>
	My primary role was to write mobile-first modular scss using the BEM naming framework (so the stylesheet would feel similar to our other products when colleagues needed to work on it), end embracing modern CSS techniques. 
</p>
<p>
	For example, the lesson plan template lended itself easily to CSS Grid. Anything that doesn't support CSS Grid, like older Internet Explorer, received a flexbox fallback.
</p>

<div class="auto-grid auto-grid--1-2thirds-1">
	<div class="two-thirds">
		<h4>I love CSS, but&hellip;</h4>
		<p>
			This was a fantastic opportunity for me to solidify and test my front end knowledge. I pushed myself to do contribute to writing and debugging some javascript, having little experience before.
		</p>
		<p>
			Additionally, this was my first experience using a modern javascript framework and I was delighted with it! 
		</p>
	</div>
	<div class="one-third">
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

<div class="block p-section">
	<h3 class="lede steps__title">
		Beta Launch
	</h3>
	<p class="small-caps-title steps__time">
		4 months <span class="meta">(in length)</span>
	</p>
</div>

<p class="mb-tiny">
	In October 2018, we launched a free version of the app to our beta group and set about getting their feedback while continuing to design and develop features like:
</p>
<ul>
	<li>Subscription & payment screens</li>
	<li>Free trial and renewal reminders</li>
	<li>Marketing automated email strategies</li>
	<li>System messages and help</li>
</ul>

<div class="auto-grid">
	<div>
		<img class="flush" src="http://placekitten.com/g/200/100" alt="alt text">
	</div>
	<div>
		<img class="flush" src="http://placekitten.com/g/200/10" alt="alt text">
	</div>
</div>

<h4>
	Beta summary: 
</h4> 
<ul>
	<li>200+ users</li>
	<li>5/5 average rating</li>
	<li>99% accessible</li>
	<li>90% mobile usage</li>
</ul>

<p class="highlight">
	The new 5 Minute Lesson Plan launched in Feb 2019, had 4000+ paying subscribers in the first 2 months and maintained the beta's impressive 5-star review rating. 
</p>

<div class="block p-section">
	<h3 class="lede steps__title">
		5. Review & learn
	</h3>
	<p class="small-caps-title steps__time">
		Ongoing
	</p>
</div>
<p>
	On a practical level, I learnt so much from this project. From design, to teamwork, to presentation skills, to CSS and javascript... I can confidently say my skills improved in every area.
</p>
<p class="highlight">
	<strong>More important than anything, was finding out I love working on products that are making a genuine effort to help people.</strong>
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
