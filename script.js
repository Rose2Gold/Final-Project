let modeButton = document.getElementById("mode");
modeButton.addEventListener("click", modeToggle);


function modeToggle() {
   var element = document.body;
   element.classList.toggle("dark-mode");
   var nav = document.getElementById("nav")
   nav.classList.toggle("dark-Nav");
}

// function toggleMode(){
//     let button = document.getElementById("mode");
//     if (button.textContent == "Dark Mode") {
//       darkMode();
//     }
//     else {
//       lightMode() ; 
//     }
// }

// function lightMode(){
//     document.body.style.backgroundColor = "#E9FFF9";
//     document.body.style.color = "#7180AC";
//     let button= document.getElementById("mode");
//     button.textContent ="Light Mode";
    
// }

// function darkMode(){
//     document.body.style.backgroundColor = "#7180AC";
//     document.body.style.color ="#E9FFF9";
//     let button= document.getElementById("mode");
//     button.textContent ="Dark Mode";
    
// }