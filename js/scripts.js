var aboutApp = angular.module("app", []);
aboutApp.controller("aboutCtrl", function($scope) {
	$scope.aboutBlock = "Hi, my name is Chris and I am a graduate of the University of California, Riverside. I completed my studies with a" +
						" BS degree in Electrical Engineering in the Spring of 2014 and have since pursued a career in Software Development." +
						" I decided to follow through with this path because I found it amazing how much impact making quality software products" +
						" can have toward everyday people, and I wanted to be apart of making that happen. I am interested in developing android apps" +
						" because it is exciting to see the potential mobile apps have in creating new ways to connect and interact with our mobile devices.";
});

aboutApp.filter('textAsHtml', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});



var header = document.querySelector('.navbar');
var origOffsetY = header.offsetTop;

function onScroll(e) {
  window.scrollY >= origOffsetY ? header.classList.add('sticky') :
                                  header.classList.remove('sticky');
}

document.addEventListener('scroll', onScroll);