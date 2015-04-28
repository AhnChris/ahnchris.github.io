var aboutText = "I'm a recent graduate of the University of California, Riverside. I completed" +
				" my studies with a BS degree in Electrical Engineering in the Spring of 2014." +
				" I like to build embedded systems, but recently I have discovered that I enjoy" +
				" developing software much more, mainly mobile apps. I also enjoy problem solving" +
				" and learning new technologies.";
document.getElementById("aboutBlock").innerHTML = aboutText;



var header = document.querySelector('.navbar');
var origOffsetY = header.offsetTop;

function onScroll(e) {
  window.scrollY >= origOffsetY ? header.classList.add('sticky') :
                                  header.classList.remove('sticky');
}

document.addEventListener('scroll', onScroll);