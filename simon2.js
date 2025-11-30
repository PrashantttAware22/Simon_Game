let body = document.querySelector("body");
let h3 = document.querySelector("h3");
let level = 0;
let StartGame = false;

// User Sequence and Game Sequence : 
let userSeq = [];
let gameSeq = [];

let btns = ["green", "red", "yellow", "blue"];

// Enter key to Start the game : 
document.addEventListener("keypress", function (event) {
    if ((event.code == "Enter") && (StartGame == false)) {
        console.log("game start");
        levelUp();
    }
});

// Game Flash
function GameFlash(btn) {
    btn.classList.add("GameFlash");
    setTimeout(function () {
        btn.classList.remove("GameFlash");
    }, 250)
}

// User Flash 
function UserFlash(btn) {
    btn.classList.add("UserFlash");
    setTimeout(function () {
        btn.classList.remove("UserFlash");
    }, 250)
}

// Level Up the Game : 
function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `level ${level}`;
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    GameFlash(randomBtn);
}

// When User press the Button : 
function btnPressed(btn) {
    btn = this;
    UserFlash(btn);
    let userColor = this.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
    btn.addEventListener("click", btnPressed);
}


// Check the Game Sequence : 
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h3.innerHTML = `Game Over , your score was ${level} <br> try again to press Enter`;
        resetGame();

    }
}


// Reset The Game : 
function resetGame() {
    level = 0;
    StartGame = false;
    userSeq = [];
    gameSeq = [];
}

