const colorElement = document.querySelector('#color');
const fontSizeElement = document.querySelector('#font-size');
const fontFamilyElement = document.querySelector('#font-family');

function getFontSize(){
    return Math.max(8, Math.min(64, fontSizeElement.value));
}

const inputElement = document.querySelector("#text-input");
const outputElement = document.querySelector("#text-output");

inputElement.addEventListener("input", 
    (e) => {
        outputElement.innerHTML = inputElement.value;
    }
);

colorElement.addEventListener("input", 
    (e) => {
        outputElement.style.color = colorElement.value;
    }
);

fontSizeElement.addEventListener("input", 
    (e) => {
        outputElement.style.fontSize = getFontSize() + "px";
    }
);

fontFamilyElement.addEventListener("input", 
    (e) => {
        outputElement.style.fontFamily = fontFamilyElement.value;
    }
);