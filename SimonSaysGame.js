let gameSeq = [];
let userSeq = [];

let btns = ['box1', 'box2', 'box3', 'box4'];

let started = false;
let level = 0;
let highest = 0;


let h3 = document.querySelector('h3');

document.addEventListener('keypress', function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 150);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 150);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level: ${level}`;
    let randomIdx = Math.floor(Math.random() * 4);
    let randomClass = btns[randomIdx];
    gameSeq.push(randomClass);
    let randomBtn = document.querySelector(`.${randomClass}`);
    btnFlash(randomBtn);
    if(highest < level){
        highest = level;
    }
}
 
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{        
        h3.innerText = `Game Over! Your score is ${level}. The highest score is ${highest} Press any key to start over`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector('body').style.backgroundColor = "white";
        }, 150);
        started = false;
        level = 0;
        gameSeq = [];
        userSeq = [];
    }
}

function buttonClicked() {
    userFlash(this);
    userSeq.push(this.id);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');
for (let btn of allBtns) {
    btn.addEventListener('click', buttonClicked);
}


