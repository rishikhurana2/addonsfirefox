document.body.style.border = "5px solid red";

var button = document.createElement("BUTTON");
button.innerHTML = "CLICK ME"
document.body.appendChild(button);
button.onclick = function(){document.body.style.border = "5px solid yellow";};