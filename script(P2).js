let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];  // buttons

let started = false;
let level = 0;

let h3 = document.querySelector("h3");


document.addEventListener("keypress", function(){
    // console.log("started");
    if(started == false){
        console.log("game started!!!");
        started = true;

        levelUp();
    }

});
 
function gameFlashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
       btn.classList.remove("flash");
    }, 250);
 }

 function userFlashBtn(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash");
    }, 250);
 }

function levelUp(){
    userSeq = []; // major change. {whenever the levelUp, the userSeq set to empty}
    level++;
    h3.innerText = `level ${level}`;

    // generate random button
    let randomIdx = Math.floor(Math.random() *4);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameSeq.push(randomColor); // random color pushed into game sequence
    console.log(gameSeq);
    gameFlashBtn(randomBtn);
}

function checkAns(idx){
    // console.log("current level ", level);
    // let idx = level-1;
    if(gameSeq[idx] === userSeq[idx]){
        // console.log("same!!!");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);  // to give delay to levelUp function
        }
    }
    else{
        h3.innerHTML = `Game over!!! Your score was <b> ${level} </b> <br> press any key to start game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 200)
        reset(); // reset the game again when game over
    }
}

function btnPress(){
//    console.log(this);  // the targeted button pressed
  let btn = this;
  userFlashBtn(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor); // user color pushed into user sequence
  console.log(userSeq);

  checkAns(userSeq.length-1); // userSeq.length-1 is the last current index
}

let allBtn = document.querySelectorAll(".btn");
for(Btn of allBtn){
    Btn.addEventListener("click", btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}