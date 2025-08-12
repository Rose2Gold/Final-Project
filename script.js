let modeButton = document.getElementById("mode");
modeButton.addEventListener("click", modeToggle);


function modeToggle() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   var nav = document.getElementById("nav")
   nav.classList.toggle("dark-Nav");
}