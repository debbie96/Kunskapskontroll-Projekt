
var modal2 = document.getElementById("meny-modal");

var btn = document.getElementById("meny-modal-btn");

var span = document.getElementsByClassName("close2")[0];

btn.onclick = function() {
  modal2.style.display = "block";
}


span.onclick = function() {
  modal2.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

/* */

var modal3 = document.getElementById("search-modal");

var btn = document.getElementById("search-modal-btn");

var span = document.getElementsByClassName("close3")[0];

btn.onclick = function() {
  modal3.style.display = "block";
}


span.onclick = function() {
  modal3.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

