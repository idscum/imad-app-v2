console.log('Loaded!');

var element = document.getElementById("main-text");

element.innerHTML = "Kimmy Kardy";
var marginRight = 0;
function moveLeft() {
  marginRight = marginRight + 20;
    img.style.marginRight = marginRight + "px";
}
var img = document.getElementById("madi");
img.onclick = function() {
    var interval = setInterval(moveLeft,100);
};