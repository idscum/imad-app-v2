console.log('Loaded!');

var element = document.getElementById("main-text");

element.innerHTML = "Kimmy Kardy";

var img = document.getElementById("madi");

var marginRight = 0;
function moveLeft() {
  marginRight = marginRight + 20;
    img.style.marginRight = marginRight + "px";
}

img.onclick = function() {
    var interval = setInterval(moveLeft,50);
};