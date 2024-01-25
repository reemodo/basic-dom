const playingField = document.getElementById("playing-field")
const down = document.getElementById("down")
document.getElementById("ball").style.backgroundColor = "blue"
console.log(playingField)
const moveRight = function(){
let left =parseInt(document.getElementById("ball").style.left) || 0 
  document.getElementById("ball").style.left = left + 15+ "px"
}
const moveLeft = function(){
  let left =parseInt(document.getElementById("ball").style.left) || 0 
  document.getElementById("ball").style.left = left - 15 + "px"
}
const moveUp = function(){
  let top = parseInt(document.getElementById("ball").style.top) ||  0
  document.getElementById("ball").style.top = top - 15 + "px"
}
const moveDown = function(){
  let top = parseInt(document.getElementById("ball").style.top) ||  0
  document.getElementById("ball").style.top = top + 15 + "px"
}
const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)
header.setAttribute("class", "my-header")
const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: ~The Creator~"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)


document.onkeydown = detectKey;
function detectKey(e) {
    var posLeft = document.getElementById('ball').offsetLeft;
    var posTop = document.getElementById('ball').offsetTop;
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        document.getElementById('ball').style.marginTop  = (posTop-15)+"px";
    }
    else if (e.keyCode == '40') {
        // down arrow
        document.getElementById('ball').style.marginTop  = (posTop+15)+"px";
    }
    else if (e.keyCode == '37') {
       // left arrow
        document.getElementById('ball').style.marginLeft  = (posLeft-15)+"px";
    }
    else if (e.keyCode == '39') {
       // right arrow
        document.getElementById('ball').style.marginLeft  = (posLeft+15)+"px";
    }
}