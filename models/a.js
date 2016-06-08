var mongoose = require('mongoose');

/*var CourseSchema = new mongoose.Schema({
	code: String,
	name: String,
	courseContentGrade: Number,
	courseTeachingGrade: Number,
	courseAverage: Number,
	reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
});*/

var CourseSchema = new mongoose.Schema({
	code: String,
	name: String,
	courseContentGrade: Number,
	courseTeachingGrade: Number,
	courseAverage: Number,
	reviews: [{ 
		code: String,
		name: String,
		professor: String,
		contentReview:String,
		teachingReview: String,
		contentGrade: Number,
		teachingGrade: Number,
		average: Number,
		trimester: String,
		day: String,
		time: String,
		round: String,
		bet: Number,
		year: String,
		upvotes: Number,
		author: String,
		passed: String
	}]
});

CourseSchema.methods.addReview = function (review) {
	this.reviews.push(review);
	this.save(review);
};


mongoose.model('Course', CourseSchema);