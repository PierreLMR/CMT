var app = angular.module('CMT', ['ui.router', 'chart.js', 'uiSwitch', 'CMT.MainCtrl', 'CMT.NavController', 'CMT.reviewListController', 'CMT.courseListController', 'CMT.writeAReviewController', 'ui.bootstrap.showErrors']);

app.factory('courses', ['$http', function($http){
	
	var o = {
		courses: [
		{"code":"DEVC31110 ","name":"Acteurs publics","professor":"Franck Vallerugo, Anne-Lise Rodier","contentReview":"Je ne fais pas partie de la chaire, mais le sujet m'intéressait. En gros, on étudie comment fonctionne la France et ses collectivités territoriales. Intervenants pertinents. C'est très réussi.","teachingReview":"On peut trouver Franck génial ou pas. il est assez clivant c'est sûr. Anne-Lyse est moins charismatique. / Mais très compétents c'est sûr.","contentGrade":8,"teachingGrade":8,"average":8,"trimester":"T2","day":"Jeudi / Thursday","time":"9h-12h","round":"1er round","bet":21,"author":"Moi1","year":"2014/2015"},
		{"code":"DEVC31110 ","name":"Acteurs publics","professor":"Franck Vallerugo, Anne-Lise Rodier","contentReview":"Très intéressant !","teachingReview":"Disponible, claire.","contentGrade":8,"teachingGrade":8,"average":8,"trimester":"T2","day":"Jeudi / Thursday","time":"9h-12h","round":"1er round","bet":25,"author":"Moi2","year":"2014/2015"},
		{"code":"DEVC31110 ","name":"Acteurs publics","professor":"Franck Vallerugo, Anne-Lise Rodier","contentReview":"Bon cours, bonne introduction sur les AP. ","teachingReview":"Vallerugo fait 2 séances = OK / AL Rodier : suit son plan de cours avec une certaine monotonie et quelques incertitudes","contentGrade":8,"teachingGrade":6,"average":7,"trimester":"T2","day":"Jeudi / Thursday","time":"9h-12h","round":"1er round","bet":null,"author":"Moi3","year":"2014/2015"},
		{"code":"DEVC31110 ","name":"Acteurs publics","professor":"Franck Vallerugo, Anne-Lise Rodier","contentReview":"Cours obligatoire de la chaire d'éco urbaine, intéressant. Bonne clarification des circonscriptions / compétences / modes de scrutin etc. de chaque échelon du mille-feuille des collectivités locales, bon contentGrade rapide de l'histoire de la centralisation et décentralisation depuis la Révolution, clarification du rôle des élus et des services administratifs, présentation des divers projets auround du Grand Paris, etc. Quelques séances plus longues avec moins de contentGrade. ","commentaireProfesseur":"FV assez intéressant  sur le fond mais assez brouillon comme d'habitude. ALR plus clair, maîtrise bien son sujet, qu'elle connait en théorie et en pratique (elle fait du conseil aux acteurs publics locaux). Il a fallu négocier avec elle pour avoir droit aux ordis, elle vérifie les présences, et n'aime pas trop qu'on bavarde. Quelques intervenants intéressants mais sans plus. Validation par participation, fiche sur un acteur public local de notre choix et quiz final (2 questions de cours au choix parmis 4, donc 1 rédigée par FV et 3 par ALR). ","contentGrade":7,"teachingGrade":7,"average":7,"trimester":"T2","day":"Jeudi / Thursday","time":"9h-12h","round":"1er round","bet":23,"author":"Moi4","year":"2013/2014"},
		{"code":"DEVC31110 ","name":"Acteurs publics","professor":"Franck Vallerugo, Anne-Lise Rodier","contentReview":"Cours soporifique mais important. ","teachingReview":"Prennent en compte les absences. AL Rodier manque de dynamisme et d'intérêt pour sa matière. Les intervenants sont en revanche très intéressants.","contentGrade":5,"teachingGrade":4,"average":4.5,"trimester":"T2","day":"Jeudi / Thursday","time":"9h-12h","round":"1er round","bet":20,"author":"Moi5","year":"2014/2015"},
		{"code":"DEVC31110 ","name":"Acteurs publics","professor":"Franck Vallerugo, Anne-Lise Rodier","contentReview":"Intéressant à l'origine, on roundne vite en rond avec des infos qui se répètent entre Vallerugo, Anne-Lise Rodier et les intervenants. ","teachingReview":"Vallerugo est Vallerugo, Anne-Lise Rodier est très peu stimulante et les intervenants assez intéressants !","contentGrade":9,"teachingGrade":8,"average":8.5,"trimester":"T2","day":"Jeudi / Thursday","time":"9h-12h","round":"1er round","bet":25,"author":"Moi6","year":"2013/2014"},
		{"code":"DEVC31110 ","name":"Acteurs publics","professor":"Franck Vallerugo, Anne-Lise Rodier","contentReview":"Très intéressant, la base de la gestion des collectivités locales que l'on ignore souvent !","teachingReview":"FV toudays aussi magique, Anne-Lise Rodier est sympa (elle interdit les ordis).","contentGrade":10,"teachingGrade":9,"average":9.5,"trimester":"T2","day":"Jeudi / Thursday","time":"9h-12h","round":"1er round","bet":32,"author":"Moi7","year":"2014/2015"},
		{"code":"DEVC31110 ","name":"Acteurs publics","professor":"Franck Vallerugo, Anne-Lise Rodier","contentReview":"Intéressant si on est intéressé par le public et si on veut creuser le sujet un peu plus.","teachingReview":"Bien. S'écoute un peu parler mais est quand même calé sur le suejt.","contentGrade":7,"teachingGrade":6,"average":6.5,"trimester":"T2","day":"Jeudi / Thursday","time":"9h-12h","round":"1er round","bet":null,"author":"Moi8","year":"2013/2014"},
		{"code":"SIDI31133","name":"Advanced Excel for Managers","professor":"Christophe Harrer","contentReview":"Cours très utile","teachingReview":"Professeur pédagogique et sympathique","contentGrade":8,"teachingGrade":8,"average":8,"trimester":"T2","day":"Mardi / Tuesday","time":"16h30-19h30","round":"1er round","bet":null,"author":"Moi12","year":"2014/2015"},
		{"code":"SIDI31133","name":"Advanced Excel for Managers","professor":"Christophe Harrer","contentReview":"permet de voir les notions essentielles d'excel, pas très approfondi, cours pour les débutants en excel / ","teachingReview":"prends les absences que les 2 premiers cours, sympa","contentGrade":8,"teachingGrade":6,"average":7,"trimester":"T2","day":"Mardi / Tuesday","time":"16h30-19h30","round":"1er round","bet":46,"author":"Moi13","year":"2014/2015"},
		{"code":"SIDI31133","name":"Advanced Excel for Managers","professor":"Christophe Harrer","contentReview":"syntax","teachingReview":"il n'est pas apte a expliquer des concepts","contentGrade":7,"teachingGrade":4,"average":5.5,"trimester":"T3","day":"Lundi / Monday","time":"13h15-16h15","round":"1er round","bet":48,"author":"Moi14","year":"2014/2015"},
		{"code":"SIDI31133","name":"Advanced Excel for Managers","professor":"Christophe Harrer","contentReview":"Très bien, évidemment. J'aurais simplement apprécié que le cours soit plus orienté 'pratique' que théorique : on apprend beaucoup à refaire par des formules des choses qui existent simplement sous Excel (typiquement la conversion de données avec STXT / GAUCHE / DROITE qui a été remplacé depuis Excel 98 par un très efficace convertisseur..). Inversement, les raccourcis clavier sont assez peu abordés alors que c'est quand même assez important pour aller plus vite sous Excel en entreprise.. Pas de calcul matriciel non-plus, dommage. ","teachingReview":"Super sympa, ne prend pas vraiment les absences (il les note, mais ne tient pas rigueur si on a 4 absences et que les cases sont rendus à l'time..) il est diplômé de l'ESSEC récent, parle volontiers français si besoin. ","contentGrade":8,"teachingGrade":10,"average":9,"trimester":"T3","day":"Lundi / Monday","time":"16h30-19h30","round":"2ème round","bet":null,"author":"Moi15","year":"2014/2015"},
		{"code":"MKGS31228","name":"B2B Agri-food Mkg Policy","professor":"Bernard Doullé","contentReview":"Cours intéressant car de nombreux outils étudiés.","teachingReview":"Bernard Doullé est un directeur stratégique d'un gros groupe. Brillant professionnellement mais pédagogiquement doit s'améliorer. Très sympa et assez ouvert.","contentGrade":7,"teachingGrade":7,"average":7,"trimester":"T1","day":"Mardi / Tuesday","time":"9h-12h","round":"1er round","bet":1,"author":"Moi138","year":"2014/2015"},
		{"code":"MKGS31125","name":"B2B Marketing","professor":"Philippe Bourrat","contentReview":"Cours intéressant. Mais on passe trop de temps sur des concepts de marketing de base au lieu d'aller directement à ce qui est spécifique au B2B. Quelques cas à rendre en groupe, facile.","teachingReview":"Prof sympa et intéressant (car il travail dans un petit cabinet de conseil en marketing B2B... donc de l'expérience), mais lent. Il roundne un peu en rond. Devrait plutôt faire le cours en français.","contentGrade":6,"teachingGrade":6,"average":6,"trimester":"T1","day":"Vendredi / Friday","time":"9h-12h","round":"1er round","bet":null,"author":"Moi139","year":"2014/2015"},
		{"code":"MKGS31125","name":"B2B Marketing","professor":"Philippe Bourrat","contentReview":"Cours très intéressant et qui change des autres cours de marketing à l'ESSEC. À la fois orienté marketing et stratégie.","teachingReview":"Prof très pédagogue.","contentGrade":8,"teachingGrade":8,"average":8,"trimester":"T1","day":"Vendredi / Friday","time":"9h-12h","round":"2ème round","bet":null,"author":"Moi140","year":"2014/2015"},
		{"code":"MKGS31125","name":"B2B Marketing","professor":"Philippe Bourrat","contentReview":"Too specialized in industrial environment - construction and others. cases are a bit boring.","teachingReview":"Very cool prof. 5 Cases to hand in, no presentation or final exam. easy to valiyear.","contentGrade":4,"teachingGrade":7,"average":5.5,"trimester":"T1","day":"Vendredi / Friday","time":"9h-12h","round":"1er round","bet":15,"author":"Moi141","year":"2014/2015"},
		{"code":"MKGS31125","name":"B2B Marketing","professor":"Philippe Bourrat","contentReview":"","teachingReview":"","contentGrade":9,"teachingGrade":9,"average":9,"trimester":"T1","day":"Vendredi / Friday","time":"9h-12h","round":"1er round","bet":22,"author":"Moi142","year":"2014/2015"}
	]
	};


	o.getCourses = function () {
	    return $http.get('/courses').success(function (data){
	        angular.copy(data, o.courses);
	    });
	};

	o.getACourse = function (id) {
		return $http.get('/courses/'+ id).then(function (res){
			return res.data;
		});
	};

	o.addReview = function (id, review) {
		console.log('posting Review')
		return $http.post('/courses/'+ id + '/reviews', review );
	};


	return o;
}]);

app.factory('graph', function(){

	/*var o = {
		config: {
			title: 'Products',
		    tooltips: true,
		    labels: false,
		    mouseover: function() {},
		    mouseout: function() {},
		    click: function() {},
		    legend: {
		      display: true,
		      //could be 'left, right'
		      position: 'right'
		    }
		},
		data: {
			series: ['Note', '1er round', '2eme round'],
		    data: [{
		      x: "Laptops",
		      y: [100, 500, 50],
		      tooltip: "this is tooltip"
		    }, {
		      x: "Desktops",
		      y: [300, 100, 50]
		    }, {
		      x: "Mobiles",
		      y: [351,100,50]
		    }, {
		      x: "Tablets",
		      y: [54, 0, 100, 50]
		    }]
		}
	};

	o.termsSetup = function (reviews){

		var terms = [];

		for(i=0; i<reviews.length;i++){
			terms[i]= reviews[i].year + ' ' + reviews[i].trimester;
		}

		/*var uniq = terms.slice() // slice makes copy of array before sorting it
		  .sort(function(a,b){
		    return a > b;
		  })
		  .reduce(function(a,b){
		    if (a.slice(-1)[0] !== b) a.push(b); // slice(-1)[0] means last item in array without removing it (like .pop())
		    return a;
		  },[]); // this empty array becomes the starting value for a

		  return(uniq.sort());*/

		  /*var newarr = (function(terms){
		  var m = {}, newarr = []
		  for (var i=0; i<terms.length; i++) {
		    var v = terms[i];
		    if (!m[v]) {
		      newarr.push(v);
		      m[v]=true;
		    }

		    
		  }
		  return newarr;
		})(terms);

		return newarr;
		  
	};

	o.gradeSetup = function(reviews, terms){

	};

	o.graphInit = function (reviews, title){

		var terms = o.termsSetup(reviews);


			};*/

	var o = {
		
		labels : ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  		series : ['Series A', 'Series B'],
  		data : [
    			[65, 59, 80, 81, 56, 55, 40],
    			[28, 48, 40, 19, 86, 27, 90]
  				]
	};

	o.labelsSetup = function (){
		years = [];

		if(date.getFullYear() % 2 == 0){

		$scope.isYearEven = true;

		thisYear = (date.getFullYear()-1).toString() + '/' + date.getFullYear().toString(); 
		lastYear = (date.getFullYear()-2).toString() + '/' + (date.getFullYear()-1).toString(); 
		twoYearsAgo = (date.getFullYear()-3).toString() + '/' + (date.getFullYear()-2).toString();
		threeYearsAgo = (date.getFullYear()-4).toString() + '/' + (date.getFullYear()-3).toString();
		fourYearsAgo = (date.getFullYear()-5).toString() + '/' + (date.getFullYear()-4).toString();
		fiveYearsAgo = (date.getFullYear()-6).toString() + '/' + (date.getFullYear()-5).toString();
	
		}else{

			$scope.isYearEven = false;
			
			thisYear = date.getFullYear().toString() + '/' + (date.getFullYear()+1).toString(); 
			lastYear = (date.getFullYear()-2).toString() + '/' + (date.getFullYear()-1).toString();
			twoYearsAgo = (date.getFullYear()-3).toString() + '/' + (date.getFullYear()-2).toString();
			threeYearsAgo = (date.getFullYear()-4).toString() + '/' + (date.getFullYear()-3).toString();
			fourYearsAgo = (date.getFullYear()-5).toString() + '/' + (date.getFullYear()-4).toString();
			fiveYearsAgo = (date.getFullYear()-6).toString() + '/' + (date.getFullYear()-5).toString();
		}

		



	};

	return o;
});


//directive to hide and show navbar upon scrolling
app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {

    	var positionA = pageYOffset;
    	scope.navBarVisible = true;
        angular.element($window).bind("scroll", function() {
            
        	if(pageYOffset > positionA ){
        		scope.navBarVisible = false;
        		positionA = pageYOffset;


        	}else{
        		positionA = pageYOffset;
        		scope.navBarVisible=true;
        	}

            scope.$apply();
        });
    };
});

app.config([
	'$stateProvider',
	'$urlRouterProvider',	
	function ($stateProvider, $urlRouterProvider){
		$stateProvider.state('home', {
			url: '/home',
			templateUrl: '/javascripts/home/home.html',
			controller: 'MainCtrl',
			resolve: {
				coursePromise: ['courses', function (courses){
					return courses.getCourses();
				}]
			}
		});

		$stateProvider.state('cours', {
			url: '/cours',
			templateUrl: '/javascripts/courseList/courseList.html',
			controller: 'courseListController',
			resolve: {
		    coursePromise: ['courses', function(courses){
		      return courses.getCourses();
		    }]		  
		  }

		});

		$stateProvider.state('reviews', {
			url: '/cours/{id}',
			templateUrl: '/javascripts/reviewList/reviewList.html',
			controller: 'reviewListController',
			resolve: {
				course: ['$stateParams', 'courses', function ($stateParams, courses){
		    	return courses.getACourse($stateParams.id);
		    	}]
			}
		});

		$stateProvider.state('writeareview', {
			url: '/writeareview',
			templateUrl: '/javascripts/writeAReview/writeAReview.html',
			controller: 'writeAReviewController',
			resolve: {
				coursePromise: ['courses', function (courses){
					return courses.getCourses();
				}]
			}			
		});



		$urlRouterProvider.otherwise('/home');


	}]);


/*,
			resolve: {
			    coursePromise: ['courses', function(courses){
			      return courses.getAll();
			    }]
			  }*/

