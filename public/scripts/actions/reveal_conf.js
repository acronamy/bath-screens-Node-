(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(reveal){

	reveal.initialize({

		// Display controls in the bottom right corner
		controls: false,

		// Display a presentation progress bar
		progress: true,

		// Display the page number of the current slide
		slideNumber: false,

		// Push each slide change to the browser history
		history: false,

		// Enable keyboard shortcuts for navigation
		keyboard: true,

		// Enable the slide overview mode
		overview: true,

		// Vertical centering of slides
		center: false,

		// Enables touch navigation on devices with touch input
		touch: false,

		// Loop the presentation
		loop: true,

		// Change the presentation direction to be RTL
		rtl: false,

		// Turns fragments on and off globally
		fragments: true,

		// Flags if the presentation is running in an embedded mode,
		// i.e. contained within a limited portion of the screen
		embedded: false,

		// Flags if we should show a help overlay when the questionmark
		// key is pressed
		help: true,

		// Flags if speaker notes should be visible to all viewers
		showNotes: true,

		// Number of milliseconds between automatically proceeding to the
		// next slide, disabled when set to 0, this value can be overwritten
		// by using a data-autoslide attribute on your slides
		autoSlide: 0,

		// Stop auto-sliding after user input
		autoSlideStoppable: false,

		// Enable slide navigation via mouse wheel
		mouseWheel: false,

		// Hides the address bar on mobile devices
		hideAddressBar: true,

		// Opens links in an iframe preview overlay
		previewLinks: false,

		// Transition style
		transition: 'default', // none/fade/slide/convex/concave/zoom

		// Transition speed
		transitionSpeed: 'default', // default/fast/slow

		// Transition style for full page slide backgrounds
		backgroundTransition: 'default', // none/fade/slide/convex/concave/zoom

		// Number of slides away from the current that are visible
		viewDistance: 3,

		// Parallax background image
		parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

		// Parallax background size
		parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"

		// Number of pixels to move the parallax background per slide
		// - Calculated automatically unless specified
		// - Set to 0 to disable movement along an axis
		parallaxBackgroundHorizontal: null,
		parallaxBackgroundVertical: null,

				// The "normal" size of the presentation, aspect ratio will be preserved
		// when the presentation is scaled to fit different resolutions. Can be
		// specified using percentage units.
		width: window.innerWidth,
		height: window.innerHeight,

		// Factor of the display size that should remain empty around the content
		margin: 0.1,

		// Bounds for smallest/largest possible scale to apply to content
		minScale: 0.2,
		maxScale: 1.5

	});

}

},{}]},{},[1])