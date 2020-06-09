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
heroImageAlt: 'iPhone screen displaying a digital 5 minute lesson plan'

slug: '5mlp'
listingImage: 'http://placekitten.com/g/300/150'
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


In summer 2018, I was tasked with completely re-designing an existing online lesson planning tool for teachers based around the hugely popular 5 Minute Lesson Plan Word document template. 

![Progression of the 5 Minute Lesson Plan: Word template, Digital template inside Perspective, Customisable template inside Perspective, Standalone web app](/5mlp-evolution.png)

Attempts had been made to digitize the 5 Minute Lesson Plan template before (in 2014). However, business needs at the time had led to it being incorporated into another app that was primarily used by school managers (not teachers). 

This led to a **confusing user journey** where teachers would subscribe under one branded website but had to log in via a separate (and potentially unknown) product's website.

**Subscription renewal rates had slowed to a trickle for the existing online tool and feedback surveys revealed a frustrated user-base.** 

#### Pain points:
* A confusing sign-up / login journey 
* Complicated template options 
* Confusing 'community sharing' feature
* Didn't work on mobile devices
* More expensive than other single-purpose tools for teachers


<div class="block p-section">
	<h3>Goals & Requirements</h3>
	<p class="lede">Fix the problems from previous versions: Make it simple, affordable and responsive</p>
</div>

In consultation with stakeholders, I narrowed down a list of requirements.

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

It was important to keep <a href="https://www.teachertoolkit.co.uk/" target="_blank" rel="noopener noreferrer">TeacherToolkit</a>, the 5 Minute Lesson Plan's founder happy, especially during the design phase.

Existing users needed to be kept engaged if we were to keep them as customers in future.

One more consideration: Angel Solutions was footing the whole bill for this build and offering a generous commission back to the founder once the product went live. We had to keep costs in mind!


<!-- [Read more about the product and business needs]() -->

<!-- <div style="background-color: #ccc; opacity: 0.4; height: 4rem; overflow: hidden; padding: 1rem">
	<h4>Background</h4>
	<p>Attempts had been made to digitize the 5 Minute Lesson Plan template before. However, business needs at the time had led to it being incorporated inside another app primarily used by school managers (not teachers). This led to a confusing user journey where teachers would subscribe under one branded website but had to log in via a separate (and potentially unknown) product's website.</p>
	<p>Working exclusively in the education sector, the business' primary goal at the time was to develop some new low-cost subscription apps that could be purchased at scale and would complement their larger products already serving the industry.</p>
	<p>A standalone lesson planning app had good potential to meet this need. </p>
</div> -->

<!-- <div class="block p-section">
	<h3>Users</h3>
	<p class="lede">
		Newly qualified teachers and their trainers remained the primary audience
	</p>
</div>

* NQT teachers need to show their planning and are still developing planning skills
* Lots of teachers out there already like the 5MLP
* Teacher trainers want to provide a simple methodology for their students
* Not just for a school setting: 5MLP is used by and relevant to vocational teachers  -->

<div id="role" class="section p-section full-bleed">
<div class="limit-width page-padding">
<div class="">
	<h2 class="p-main-heading">My Role: Project Lead</h2>
	<!-- <h3>My Role</h3> -->
	<!-- <p class="lede">
		As project lead, I wore a lot of different hats on this one&hellip;
	</p> -->
</div>

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

**Note:** Other talented folk handled all the design, development and content for the marketing website. Kudos! :)

**This really was a team effort though.** I had the pleasure of working closely with a very talented developer called [Ryan Simpson]() throughout this project. We also had help along the way from the [Angel Solutions]() team - you know who you are.

</div>
</div>


<div class="p-section p-section-headerxxx page-padding-bleedxxx">
	<h2 class="p-main-heading">
		Step-by-step process
	</h2>
</div>

<div class="steps">

<div class="block ">
	<h3 class="lede steps__title">
		Research
	</h3>
	<p class="small-caps-title steps__time">1-2 weeks</p>
</div>


Although no budget was assigned for research, it's too essential to skip! I used quick surveys to get some design steer from teachers in our target user-base.

<div class="research-grid">
	<div class="research__quote">
		<blockquote>
			I want a template that's easy to follow and easy to share with my observer or other colleagues
			<footer>&mdash; User persona excerpt</footer>
		</blockquote>
	</div>
	<div>
		<div class="research__matters">
			<h4>What mattered most:</h4>
			<ul>
				<li>Speed </li>
				<li>Sharing</li>
			</ul>
		</div>
	</div>
</div>


<div class="block  p-section">
	<h3 class="lede steps__title">
		Design & Wireframe
	</h3>
	<p class="small-caps-title steps__time">
		4 weeks
	</p>
</div>

I prioritised designing the lesson plan template and how it would look on different devices, as the whole product hinged on that.

<div class="auto-grid auto-grid--1-3">

![alt text here](http://placekitten.com/g/200/100)
![alt text here](http://placekitten.com/g/200/100)
![alt text here](http://placekitten.com/g/200/100)

</div>

I should have spent more time at this stage mapping out the user journeys and nailing down the feature list with the product owner.

As it was, we ended up starting build with features not yet agreed.

#### Research continued...

I sought out design feedback as much as possible kept surveying users, and ran impromptu focus groups when teachers and education leaders were visiting the office.

<div class="block  p-section">
	<h3 class="lede steps__title">
		Build 
	</h3>
	<p class="small-caps-title steps__time">
		2 months <span class="">(alongside other projects)</span>
	</p>
</div>

Ryan and I chose to use Vue.js as the backbone to this project, for speed and to give it the potential to become a progressive web app with service workers for offline access at a later date. 

My primary role was to write mobile-first modular scss using the BEM naming framework (so the stylesheet would feel similar to our other products when colleagues needed to work on it), end embracing modern CSS techniques. 

For example, the lesson plan template lended itself easily to CSS Grid. Anything that doesn't support CSS Grid, like older Internet Explorer, received a flexbox fallback.

#### I love CSS, but...

This was a fantastic opportunity for me to solidify and test my front end knowledge. I pushed myself to do contribute to writing and debugging some javascript, having little experience before.

Additionally, this was my first experience using a modern javascript framework and I was delighted with it! 

#### Key learnings: 
* CSS Grid
* Vue.js basics
* Print to pdf
* Git in the console

<div class="block  p-section">
	<h3 class="lede steps__title">
		4. Beta Launch
	</h3>
	<p class="small-caps-title steps__time">
		4 months long
	</p>
</div>

In October 2018, we launched a free version of the app to our beta group and set about getting their feedback while continuing to design and develop features like:

* Subscription & payment screens
* Free trial and renewal reminders
* Marketing automated email strategies
* System messages and help

![alt text here](http://placekitten.com/g/200/100) ![alt text here](http://placekitten.com/g/200/100) 

The new 5 Minute Lesson Plan launched in Feb 2019, had 4000+ paying subscribers in the first 2 months and maintained the beta's impressive 5-star review rating. 

#### Beta summary: 
<ul class="p-list">
	<li>200+ users</li>
	<li>5/5 average rating</li>
	<li>99% accessible</li>
	<li>90% mobile usage</li>
</ul>

<div class="block  p-section">
	<h3 class="lede steps__title">
		5. Review & learn
	</h3>
	<p class="small-caps-title steps__time">
		Ongoing
	</p>
</div>

On a practical level, I learnt so much from this project. From design, to teamwork, to presentation skills, to CSS and javascript... I can confidently say my skills improved in every area.

More important than anything, 
was finding out I love working on products that are making a genuine effort to help people.

#### Things I would do differently

**More wireframes**
I started designing some screens in the browser. Not a great idea. Even basic wireframes would have saved me time here.

**Confirm an MVP Feature list**
Some mis-communication with a decision-maker meant we lost time developing features that weren't needed.

**Design filters**
I should have gone with my gut and built filters into the lesson plan index to make them easier to find. In fact, I would design that whole screen differently!

</div>