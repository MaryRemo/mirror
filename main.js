// Write an event listener that listens for the keyup event on the input 
// field.
// The event handler function should update the textContent property
//  of both sections.

let mirror = document.getElementById("message");

mirror.addEventListener("keyup", function () {
    document.getElementById("main").textContent = mirror.value;
    document.getElementById("part").textContent = mirror.value;
    
});