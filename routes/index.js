var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
//var Review = mongoose.model('Review');
var Course = mongoose.model('Course');




/*router.param('review', function (req, res, next, id) {
	var query = Review.findById(id);

	query.exec(function (err, review){
		if(err) { return next(err);}
		if(!review) {return next(new Error('can\'t find review'));}

		req.review = review;
		return next();
	});
});*/

router.param('course', function (req, res, next, id) {
    var query = Course.findById(id);

    query.exec(function (err, course){
        if(err) { return next(err);}
        if(!course) {return next(new Error('can\'t find course'));}

        req.course = course;
        return next();
    });
});



/*router.param('name', function (req, res, next, name) {
	var query = Review.find({ 'name': name });

	query.exec(function (err, review) {
		if(err){ return next(err);}
		if(!review){ return next(new Error('can\'t find review'));}

		req.name = name;
		return next();
	});
});*/

router.post('/courses', function(req, res, next) {
  var course = new Course(req.body);

  course.save(function(err, course){
    if(err){ return next(err); }

    res.json(course);
  });
});


router.post('/courses/:course/reviews', function ( req, res, next){

	Course.findById(req.course, function (err, course){
		course.addReview(req.body);
		course.save(function (err, course){
			if(err){ return next(err);}
			console.log(course);
			res.json(course);
			res.end();
		});
		
	})

});


router.get('/courses', function(req, res, next) {
 /* Course.find(function(err, courses){
    if(err){ return next(err); }

    res.json(courses);
  });*/

  Course.find(function(err, courses){
    if(err){ return next(err); }

    res.json(courses);
  }).select({ "name": 1, "_id": 1, 'code': 1, 'courseContentGrade': 1, 'courseTeachingGrade': 1, 'courseAverage': 1});
});


/*router.put('/reviews/:review/upvote', function (req, res, next) {
	req.review.upvote(function (err, review){
		if(err) { return next(err); }

		res.json(review);
	});
});*/

/*router.get('/reviews/:review', function (req, res) {
	res.json(req.review);
});*/


router.get('/courses/:course', function (req, res, next) {
	/*req.course.populate('reviews', function (err, course){
		if(err){ return next(err);}

		res.json(course);
	});*/

	res.json(req.course);
});




/*router.get('/courses/:course/reviews', function (req, res){
	res.json(req.course.reviews);
});*/


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
