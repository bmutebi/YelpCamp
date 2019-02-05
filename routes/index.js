var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/", function(req, res){
	res.render("landing");
});


//authentication routes
//==============================
//register form
router.get("/register", function(req, res){
	res.render("register");
})

//sign up logic
router.post("/register", function(req, res){
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user){
		if (err) {
			req.flash("error", err.message);
			return res.render("register")
		}
		passport.authenticate("local")(req, res, function(){
			req.flash("success", "Hello " + user.username +"!. Welcome to YelpCamp!");
			res.redirect("/campgrounds");
		});
	});
});

//show login form
router.get("/login", function(req, res){
	res.render("login");
});

//login logic
router.post("/login", passport.authenticate("local", {
	successRedirect: "/campgrounds", 
	failureRedirect: "/login"
}), function(req, res){

	res.render()
});

//logout route
router.get("/logout", function(req, res){
	req.logout();
	req.flash("success", "You were successfully logged out!");
	res.redirect("/campgrounds");
});

module.exports = router;
