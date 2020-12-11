var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("carousel");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); 
}
var modal = document.getElementById("user-modal");

var btn = document.getElementById("user-modal-btn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var modal1 = document.getElementById("kassa-modal");

var btn = document.getElementById("kassa-modal-btn");

var span = document.getElementsByClassName("close1")[0];

btn.onclick = function() {
  modal1.style.display = "block";
}


span.onclick = function() {
  modal1.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}





function openUser(loginNewUser) {
  var i;
  var x = document.getElementsByClassName("loginornewuser");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(loginNewUser).style.display = "block";  
}



