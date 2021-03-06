(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function($,Reveal){

	var timer;

	function revealObserver(sel,cb){
		// select the target node
		$(sel).each(function(){
			var target = $(this)[0],
					jqTarget =$(this)
			// create an observer instance
			var observer = new MutationObserver(function(mutations) {
				for(i in mutations){
					if(mutations[i].attributeName==='class'){
						var classList = mutations[i].target.classList
						for(x in classList){
							if(/present/g.test(classList[x])){
								cb(jqTarget)
								return
							}
						}
					}
				}
			});
			// configuration of the observer:
			var config = {
				attributes: true,
				childList: false,
				characterData: false
			};
			// pass in the target node, as well as the observer options
			observer.observe(target, config);
		})
	}

	//when video
	revealObserver('.slides .video',function(target){

		var videoId = target.data().url.split('/').pop()

		//make a request to youtube
			gapi.client.setApiKey('AIzaSyAY7gaLqRDIudk4KesUmQNBuBZLjooTkRw')
			gapi.client.load('youtube','v3',function(){
				requestOptions = {
					id: videoId,
					part: 'contentDetails',
					maxResults: 1
				}
				var request = gapi.client.youtube.videos.list(requestOptions)
				request.execute(function(res){
					var duration = res.items[0].contentDetails.duration,
						duration = duration.split('PT').pop(),
						duration = {
							minutes:duration.split(/[M|S]/g)[0],
							seconds:duration.split(/[M|S]/g)[1],
							get total(){
								var m = this.minutes,
										s = parseInt(this.seconds),
										MtoS = m*60,
										SaddS = MtoS+s
								return SaddS*1000
							}
						}

		var w = $(window).outerWidth(),
				h = $(window).outerHeight()

		//pause for video
		app.setInterval(duration.total)

		//reset
		clearTimeout(timer)
		timer = setTimeout(function(){
			app.setDefaultInterval()
			Reveal.next()
		},duration.total)
		target.find('iframe')
			.attr('width',w)
			.attr('height',h)
			.attr('src','https://www.youtube.com/embed/'+videoId+'?autoplay=1&controls')
			})
				//move
		})//move
	})//video observer end

}

},{}]},{},[1])