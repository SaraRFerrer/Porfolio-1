let intro = ["My name is Sara Ferrer. Welcome to my Portfolio"];
let text = 0;
let speed = 100;



writer = () => {
const message = document.querySelector("#intro-message");
   
    message.innerHTML = intro[0].substring(0, text) + "<span>!</span>";

    if(text++ != intro[0].length)
        setTimeout(writer, speed);
}

window.addEventListener("load", writer);