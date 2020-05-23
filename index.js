var css = document.querySelector("h3")

var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")

// the event listener here is the colourwheel input)
color1.addEventListener("input",setGradient)

color2.addEventListener("input",setGradient)

// note theres no need for paranthesis here as setGradient is a call back function
// setGradient fn will get called when input event is triggered, hence will call by adding () after setGradient to call it.

function setGradient(){
  body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")"
  css.textContent = body.style.background + ";"
}
