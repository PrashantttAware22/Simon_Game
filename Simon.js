let body = document.querySelector("body");
let h3 = document.querySelector("h3");

let gameSeq = [];
let userSeq = [];

let btns = ["green", "red", "yellow", "blue"];

let level = 0;
let gameStart = false; //(Game is not Start yet)

// 1st Step i.e. Start the game 
document.addEventListener("keypress", function (event) {
    if ((event.code === "Enter") && (gameStart == false)) {
        console.log("start game");
        gameStart = true;
        levelUp();
    }
});

// Step 2 : flash the button 
function GameFlash(btn) {
    btn.classList.add("GameFlash");
    setTimeout(function () {
        btn.classList.remove("GameFlash");
    }, 250)
}



// Step 2 : level Up 
function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);

    // We will add Random color within a game Sequence 
    gameSeq.push(randCol);
    console.log(gameSeq);
    GameFlash(randBtn);
}

// user flash the button 
function UserFlash(btn) {
    btn.classList.add("UserFlash");
    setTimeout(function () {
        btn.classList.remove("UserFlash");
    }, 250)
}

// Step 3 : Add Event listner to buttons 
function btnPressed() {
    let btn = this;
    UserFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    anscheck(userSeq.length - 1);
    // console.log(`userSeq: ${userSeq}`) ; 
}

// Select all the buttons and add Event handler to it via function 
// btnPressed() 
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPressed);
}



// This Function will match the user sequence and game Sequence 
function anscheck(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h3.innerHTML = `game over score was ${level} <br> press enter to try again ..`
        resetgame();
    }
}

function resetgame() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    gameStart = false;
}