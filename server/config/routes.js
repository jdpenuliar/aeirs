module.exports = function(app){
	app.get("/haha",function(req,res){
		res.render("haha");
	});
}