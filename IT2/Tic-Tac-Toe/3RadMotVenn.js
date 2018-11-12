


let player1= "X";
let player2 = "O";



let currentTurn=1;
let movesMade = 0;





const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");



box1.onclick = function () {
    movesMade++;

    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
    } else{
        event.target.innerHTML = player2;
        event.target.style.color = "white";
        currentTurn--;
    }};

box2.onclick = function () {
    movesMade++;

    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
    } else{
        event.target.innerHTML = player2;
        event.target.style.color = "white";
        currentTurn--;
    }};

box3.onclick = function () {
    movesMade++;

    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
    } else{
        event.target.innerHTML = player2;
        event.target.style.color = "white";
        currentTurn--;
    }};

box4.onclick = function () {
    movesMade++;

    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
    } else{
        event.target.innerHTML = player2;
        event.target.style.color = "white";
        currentTurn--;
    }};

box5.onclick = function () {
    movesMade++;

    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
    } else{
        event.target.innerHTML = player2;
        event.target.style.color = "white";
        currentTurn--;
    }};

box6.onclick = function () {
    movesMade++;

    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
    } else{
        event.target.innerHTML = player2;
        event.target.style.color = "white";
        currentTurn--;
    }};

box7.onclick =  function () {
    movesMade++;

    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
    } else{
        event.target.innerHTML = player2;
        event.target.style.color = "white";
        currentTurn--;
    }};

box8.onclick = function () {
    movesMade++;

    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
    } else{
        event.target.innerHTML = player2;
        event.target.style.color = "white";
        currentTurn--;
    }};

box9.onclick = function () {
    movesMade++;

    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
    } else{
        event.target.innerHTML = player2;
        event.target.style.color = "white";
        currentTurn--;
    }};


function playerTurn() {
    
    if (currentTurn === 1) {
        document.getElementById(h1).innerHTML = "player 1's turn"
    } else {
        document.getElementById(h1).innerHTML = "player 2's turn"
    }
}

function checkForWinner() {
    if (movesMade>4) {
        var a = document.getElementById(box1),
            b = document.getElementById(box2),
            c = document.getElementById(box3),
            d = document.getElementById(box4),
            e = document.getElementById(box5),
            f = document.getElementById(box6),
            g = document.getElementById(box7),
            h = document.getElementById(box8),
            i = document.getElementById(box9);

        var moves = Array.prototype.slice.calls(a,b,c,d,e,f,g,h,i);
    }
        console.log(moves)



    
}

























/*

if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1===box3.innerHTML)
    console.log("win");

else  if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4===box6.innerHTML)
    console.log("win");

else  if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7===box9.innerHTML)
    console.log("win");

else  if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1===box7.innerHTML)
    console.log("win");

else  if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2===box8.innerHTML)
    console.log("win");

else  if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3===box9.innerHTML)
    console.log("win");

else  if (box1.innerHTML !== "" && box5.innerHTML === box6.innerHTML && box1===box9.innerHTML)
    console.log("win");

else  if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3===box7.innerHTML)
    console.log("win")

*/







/*

function getWinner() {

    var box1 = document.getElementById(box1),
     box2 = document.getElementById(box2) ,
     box3 = document.getElementById(box3),
     box4 = document.getElementById(box4),
     box5 = document.getElementById(box5),
     box6 = document.getElementById(box6),
     box7 = document.getElementById(box7),
     box8 = document.getElementById(box8),
     box9 = document.getElementById(box9);


    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1===box3.innerHTML)
        console.log("win");

    else  if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4===box6.innerHTML)
          console.log("win");

    else  if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7===box9.innerHTML)
          console.log("win");

     else  if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1===box7.innerHTML)
          console.log("win");

     else  if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2===box8.innerHTML)
          console.log("win");

     else  if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3===box9.innerHTML)
          console.log("win");

     else  if (box1.innerHTML !== "" && box5.innerHTML === box6.innerHTML && box1===box9.innerHTML)
        console.log("win");

    else  if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3===box7.innerHTML)
        console.log("win")

}
*/
