const listElements = document.querySelectorAll(".list-element");

function getRandomInt(maxVal){
    return Math.round(Math.random() * maxVal);
}

function getRandomColor(){
    return "rgb("+getRandomInt(256)+", "+getRandomInt(256)+", "+getRandomInt(256)+")";
}

listElements.forEach(
    (element) => {
        element.addEventListener("click",
            (e) => {
                element.style.color = getRandomColor();
            }
        );
    }
);

listElements.forEach(
    (element) => {
        element.click();
    }
);