/*var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
	name: String,
	code: String,
	passed: String,
	contentReview: String,
	teachingReview: String,
	contentGrade: Number,
	teachingGrade: Number,
	average: Number,
	professor: String,
	trimester: String,
	day: String,
	time: String,
	round: String,
	bet: Number,
	year: Number,
	upvotes: {type: Number, default: 0},
	author: String,
	course: { type: mongoose.Schema.Types.ObjectId, ref:'Course'}
});

ReviewSchema.methods.upvote = function (cb) {
	this.upvotes++;
	this.save(cb);
};

mongoose.model('Review', ReviewSchema);*/