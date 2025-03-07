for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonih = this.innerHTML;
        sound(buttonih);
        buttonanimation(buttonih);
    });
}

// Move keypress event listener outside loop
document.addEventListener("keypress", function (e) {
    sound(e.key);
    buttonanimation(e.key);
});

function sound(key) {
    var button = document.querySelector("." + key); // Select button element

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;

        case "s":
            var audio2 = new Audio("sounds/tom-3.mp3");
            audio2.play();
            break;

        case "d":
            var audio3 = new Audio("sounds/tom-4.mp3");
            audio3.play();
            break;

        case "j":
            var audio4 = new Audio("sounds/crash.mp3");
            audio4.play();
            break;

        case "k":
            var audio5 = new Audio("sounds/kick-bass.mp3");
            audio5.play();
            break;

        case "l":
            var audio6 = new Audio("sounds/snare.mp3");
            audio6.play();
            break;

        default:
            console.log(key);
            return;
    }

    // Change color if button exists
   
}

function buttonanimation(key) {
    var activeButton = document.querySelector("." + key);

    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function () {
            activeButton.classList.remove("pressed");
        }, 200);
    }
}
