const difficulteElement = document.querySelector("#difficulte");
const playbtn = document.querySelector("#play-btn");

function getMaxVal(){
    if(difficulteElement.value == 'e') return 10;
    if(difficulteElement.value == 'm') return 100;
    if(difficulteElement.value == 'h') return 1000;
}

function getNbTries(){
    if(difficulteElement.value == 'e') return 10;
    if(difficulteElement.value == 'm') return 5;
    if(difficulteElement.value == 'h') return 3;
}

function play(e){
    let nbTries = getNbTries();
    let maxVal = getMaxVal();

    console.log("maxVal : ", maxVal);
    console.log("nbTries : ", nbTries);

    let computer = Math.round(Math.random() * maxVal);   
    console.log("Computer : ", computer);

    let player;

    do{
        player = prompt("Guess The Number (Q to quit)");
        nbTries--;
    }while(nbTries > 0 && player != 'Q' && Number(player) != computer);

    if(player == 'Q'){
        alert("Bye");
    }else if(Number(player) == computer){
        alert("You Won");
    }else{
        alert("You Lost");
    }
}

playbtn.addEventListener("click", play);