var mongoose = require("mongoose"),
	Campground = require("./models/campgrounds.js");
	Comment = require("./models/comment");

var data = [
	{name: "Maine Arts Camp", 
	image: "https://images.unsplash.com/photo-1501703979959-797917eb21c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4132e8087781addd674e137a9f596dc&auto=format&fit=crop&w=500&q=60",
	description: "Maine Arts Camp is a small, nurturing camp community with a maximum of 100 campers per session. Our camp is a place where children and teens feel comfortable expressing their creativity while meeting like minded kids. These articles are to help you and your children handle their time at camp. Have an idea for an article? We'd love to hear from you. Give us a call or send us an email today."},

	{name: "California NewYork", 
	image: "https://images.unsplash.com/photo-1485343034225-9e5b5cb88c6b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a28fc68742556a682ecac876ab4b9c2c&auto=format&fit=crop&w=500&q=60",
	description: "Maine Arts Camp is a small, nurturing camp community with a maximum of 100 campers per session. Our camp is a place where children and teens feel comfortable expressing their creativity while meeting like minded kids. These articles are to help you and your children handle their time at camp. Have an idea for an article? We'd love to hear from you. Give us a call or send us an email today."},

	{name: "Kenyatta Falls, Kenya", 
	image: "https://images.unsplash.com/photo-1501703979959-797917eb21c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4132e8087781addd674e137a9f596dc&auto=format&fit=crop&w=500&q=60",
	description: "Maine Arts Camp is a small, nurturing camp community with a maximum of 100 campers per session. Our camp is a place where children and teens feel comfortable expressing their creativity while meeting like minded kids. These articles are to help you and your children handle their time at camp. Have an idea for an article? We'd love to hear from you. Give us a call or send us an email today."}
]

function seedDB () {
	Campground.remove({}, function(err) {
	// if (err) {
	// 	console.log("Encountered an error");
	// }
	// console.log('Removed campgrounds');

	// //add a new campground
	// data.forEach(function(seed){
	// 	Campground.create(seed, function(err, campground){
	// 		if (err) {
	// 			console.log(err)
	// 		} else {
	// 			console.log("Added a new campground..");
	// 			//add a comment
	// 			Comment.create({
	// 				text: "What a beautiful camp",
	// 				author: "Gloria"
	// 			}, function(err, comment) {
	// 				if (err) {
	// 					console.log(err)
	// 				} else {
	// 					campground.comments.push(comment);
	// 					campground.save();
	// 					console.log('created a new comment')
	// 				}
	// 			})
	// 		}
	// 	});
	// });
});	
}

module.exports = seedDB;
