//#! SERVER
module.exports = function(app,io,init){
	//when socket io is established open up /update for data signals from drupal
	app.post('/update',function(req, res){
		init()//hard restart the screen and pull down data
		console.log(req.body)
		io.emit('update',{location:req.body})
		console.log('Incoming update')
		res.end('')
	})

}
