
var fs = require('fs');

var courses = require('./coursesJson.json');
var reviews = require('./reviews.json');

for(a=0;a<courses.length;a++){
	courses[a].reviews = [];
}

for(i=0;i<courses.length;i++){
	for(j=0;j<reviews.length;j++){
		if(courses[i].name == reviews[j].name){
			courses[i].reviews.push(reviews[j]);
		}
	}
}

for(k=0;k<courses.length;k++){
	var contentGrade = null;
	var teachingGrade = null;
	var contentGradeCounter = null;
	var teachingGradeCounter = null;

	for(l=0;l<courses[k].reviews.length;l++){

		if( courses[k].reviews[l].contentGrade != null){
		contentGrade += courses[k].reviews[l].contentGrade;
		contentGradeCounter += 1;
		}

		if( courses[k].reviews[l].teachingGrade != null ){
		teachingGrade += courses[k].reviews[l].teachingGrade;
		teachingGradeCounter += 1;
		}
	}

	if(contentGrade != null){
	courses[k].courseContentGrade = contentGrade / contentGradeCounter;
	}
	if(teachingGrade != null){
	courses[k].courseTeachingGrade = teachingGrade / teachingGradeCounter;
	}

	if( contentGrade != null && teachingGrade != null){
	courses[k].courseAverage = (courses[k].courseContentGrade + courses[k].courseTeachingGrade) / 2;

	courses[k].courseContentGrade = courses[k].courseContentGrade.toFixed(1);
	courses[k].courseTeachingGrade = courses[k].courseTeachingGrade.toFixed(1);
	courses[k].courseAverage  = courses[k].courseAverage.toFixed(1);
	}

}

var outputFilename = 'output.json';

fs.writeFile(outputFilename, JSON.stringify(courses, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
}); 

console.log('done');