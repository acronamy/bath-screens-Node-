var http = require('http'),
		$ = require('../template_fns/route_locals.js'),
		path = require('path'),
		url = require('url'),
		os = require('os'),
		rp = require('request-promise'),
		conf = require('../../configuration/conf.json')

function hyphanate(str){
	return str.replace(/\_/g,'-')
}

var request = {}
request.port = 80
request.method = 'GET'

module.exports = function(app,io,server_settings){

//IO Broadcast
io.on('connection',function(socket){
	require('../io/warning_broadcast.js')(app,io)
	require('../io/weather_broadcast.js')(app,io)
	require('../io/update_broadcast.js')(app,io,init)
	console.log('Socket.io connection established')
});

app.get('/settings',function(req,res){
	res.send(conf)
})

function init(){

	app.get('/',qs)
	app.get('/:audience',qs)

	function qs(req,res){
		var q = url.parse(req.url,true).query,
				loc = q.location,
				vic = q.vicinity,
				par = conf.parentSite,
				reqPath = par+path.join('get',hyphanate(loc)),
				query = ['?locations='+loc].join(''),
				debugMode = q.debug||false

				//Request Options
				options = {
					uri:reqPath,
					qs:query,
					headers: {
						'User-Agent': 'Request-Promise'
					},
					json:true
				}

		rp(reqPath)
		.then(function (data) {
			if(debugMode){
				res.send(JSON.parse(data))
			}
			else{
				var params = {
					location:loc,
					audience:req.params.audience
				}
				//if all data was sent then pass to filter for cleaning.
				require('../filter/filter_vicinity.js')(data,params,(cleanData,feeds)=>{



						feeds.forEach((item)=>{
							rp(item)
								.then((data)=>{
								item.content = data
								var feedReady = cleanData.filter((node)=>{
									if(node.nid===item.nid){
										node.content = require('../filter/filter_feeds.js')(item).content
										return node
									}
								})

								//!!Feeds have been parsed and ready to render the entire screen!!

								res.render('index',{
									$:require('../template_fns/route_locals.js')(cleanData),
									data:cleanData,
									location:loc,
									vicinity:vic,
									server:server_settings
								})

							})
						})


				})
			}
		})
		.catch((err)=>{
			if(err) res.render('err',{
				data:{
					title:'Connection lost',
					server:server_settings
				}
			})


		})

	}

}

	init()
}
