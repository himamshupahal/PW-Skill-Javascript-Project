
let container = document.getElementById("container");
let display = document.getElementById("display");

// Adding The KeyDown Event Listener To The Document //

document.addEventListener("keydown" , function (e) {
  display.style.color = "red" ;
  display.innerText = e.key + " is KeyDown ";
}
)

// Adding a Keyup Event Listener To The Document //

document.addEventListener("keyup" , function (e) {
     display.style.color = "green" ;
     display.innerText = e.key + " is KeyUp ";
   }
   )
   