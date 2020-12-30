# Gridsome-grace, AKA [Grace Snow Design](https://wwww.gracesnowdesign.co.uk)

This is a new (2020) portfolio and blog site to document my learning, play with different front end tidbits and showcase my front end and design projects. It is very much a **work in progress!**

## Tech stack chosen

I designed several versions of this site in Adobe XD, and used Adobe illustrator for some of the svg icons. This site is built up from the base starter for new [Gridsome](https://gridsome.org/) projects, a static site generator using Vue.js.

The design and layout is entirely my own work. I could have made this site a lot simpler but wanted to experiment with different techniques, especially CSS shapes, transforms and min-max font sizes.

Over time, I will add more functionality via gridsome plugins, make better use of vue components, reduce scss variables and streamline some of the scss (i.e. reduce repetition of some styles across pages).

## License

This project is licensed under the terms of the GNU General Public License v3.0.

Others are welcome to use this code as a base for their own projects, but with **explicit attibution and a link back to this repository**.

## How to use

1. Clone this repo to a local directory on your machine
2. Run `gridsome develop` to spin up a live development server at `http://localhost:8080`. This will include a link to explore the graph QL data layer at `http://localhost:8080/___explore`
3. Run `gridsome build` to compile a production-ready version to the `dist` directory

**Happy coding!** 🎉🙌

---

# Page speed Experiment

A new bit of CSS can improve page speed `content-visibility: auto`

Lots of blogs about this, like [this one](https://dev.to/dailydevtips1/i-made-my-website-28ms-faster-with-content-visibility-466e).

I have created an `.auto-visible` class and added the css directly in a few components on the site.

## To test

1. Comment out all content-visibility
2. Push to staging site
3. Run lighthouse in private tab and note all results
4. Add content-visibility to all below-fold parts of home page
5. Re-push
6. Re-run lighthouse and compare
