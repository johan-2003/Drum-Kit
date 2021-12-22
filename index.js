const buttons = document.querySelectorAll(".drum"); // this returns a 'node' list of all buttons
const buttonsArray = Array.from(buttons); //convert that to a true array then used the .forEach method to add event listeners to every button

//for loop variation 

for (let i = 0; i < buttons.length; i++) {
    buttonsArray[i].addEventListener("click", clickedButton)
}

//This doesn't work because Im passing in the result of the Event Listener

// buttonsArray.forEach(addEventListener("click", clickedButton)); 

// buttonsArray.forEach(addingEvents)

// function addingEvents(button) {
//     button.addEventListener("click", clickedButton)
// }


function clickedButton() {
    makeSound(this.innerHTML);
    buttonClickedAnimation(this.innerHTML);
}

document.addEventListener("keydown", function(KeyBoardEvent){
    // console.log(KeyBoardEvent);
    makeSound(KeyBoardEvent.key);
    buttonClickedAnimation(KeyBoardEvent.key)
})


const soundMap = {
    w: new Audio("sounds/tom-1.mp3"),
    a: new Audio("sounds/tom-2.mp3"),
    s: new Audio("sounds/tom-3.mp3"),
    d: new Audio("sounds/tom-4.mp3"),
    j: new Audio("sounds/snare.mp3"),
    k: new Audio("sounds/crash.mp3"),
    l: new Audio("sounds/kick-bass.mp3")
}

function makeSound(key) {
    soundMap[key].play();
}


function buttonClickedAnimation(currentKey){
    const pressedButton = document.querySelector("." + currentKey);
    pressedButton.classList.add("pressed");
    
    setTimeout(() => {
        pressedButton.classList.remove("pressed");
    },100);
    
}
