


let player1= "X";
let player2 = "O";



let currentTurn=1;
let movesMade = 0;

let player1Wins= 0;
let player2Wins = 0;

const player1Places = [];

const player2Places = [];


const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
const resetButton = document.getElementById("resetButton").addEventListener("click", startNewGame);
const player1Score = document.getElementById("player1Score");
const player2Score = document.getElementById("player2Score");
const playerTurn = document.getElementById("playerTurn");
const x = document.getElementById("blopSound");








function win1() {
    if (player1Places.includes(1) && player1Places.includes(2) && player1Places.includes(3)) {
        alert("Player 1 wins");
        startNewGame();
    } else if (player1Places.includes(4) && player1Places.includes(5) && player1Places.includes(6)) {
        alert("Player 1 wins");
        startNewGame();
    }else if (player1Places.includes(7) && player1Places.includes(8) && player1Places.includes(9)) {
        alert("Player 1 wins");
        startNewGame();
    }else if (player1Places.includes(1) && player1Places.includes(4) && player1Places.includes(7)) {
        alert("Player 1 wins");
        startNewGame();
    }else if (player1Places.includes(2) && player1Places.includes(5) && player1Places.includes(8)) {
        alert("Player 1 wins");
        startNewGame();
    }else if (player1Places.includes(3) && player1Places.includes(6) && player1Places.includes(9)) {
        alert("Player 1 wins");
        startNewGame();
    }else if (player1Places.includes(1) && player1Places.includes(5) && player1Places.includes(9)) {
        alert("Player 1 wins");
        startNewGame();
    }else if (player1Places.includes(3) && player1Places.includes(5) && player1Places.includes(7)) {
        alert("Player 1 wins");
        startNewGame();
    }
}


function win2() {

    if (player2Places.includes(1) && player2Places.includes(2) && player2Places.includes(3)) {
        alert("Player 2 wins");
        startNewGame();
    } else if (player2Places.includes(4) && player2Places.includes(5) && player2Places.includes(6)) {
        alert("Player 2 wins");
        startNewGame();


    }else if (player2Places.includes(7) && player2Places.includes(8) && player2Places.includes(9)) {
        alert("Player 2 wins");
        startNewGame();

    }else if (player2Places.includes(1) && player2Places.includes(4) && player2Places.includes(7)) {
        alert("Player 2 wins");
        startNewGame();

    }else if (player2Places.includes(2) && player2Places.includes(5) && player2Places.includes(8)) {
        alert("Player 2 wins");
        startNewGame();

    }else if (player2Places.includes(3) && player2Places.includes(6) && player2Places.includes(9)) {
        alert("Player 2 wins");
        startNewGame();

    }else if (player2Places.includes(1) && player2Places.includes(5) && player2Places.includes(9)) {
        alert("Player 2 wins");
        startNewGame();

    }else if (player2Places.includes(3) && player2Places.includes(5) && player2Places.includes(7)) {
        alert("Player 2 wins");
        startNewGame();

    }
}

function playSound() {
    x.play();
}
function randomPlace() {

}

function startNewGame() {

    currentTurn=1;
    movesMade = 0;

    player1Places.length = [];

    player2Places.length = [];

    player1Wins= 0;
    player2Wins = 0;

    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";

    playerTurn.innerHTML = "Player 1 starts"

}

playerTurn.innerHTML = "Player 1 starts";

box1.onclick = function () {
    movesMade++;
    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
        player1Places.push(1);
        playerTurn.innerHTML= "Player 2's turn";
        playSound()


    } else{

    }};

box2.onclick = function () {
    movesMade++;
    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
        player1Places.push(2);
        playerTurn.innerHTML= "Player 2's turn";
        playSound()



    } else{


    }};

box3.onclick = function () {
    movesMade++;
    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
        player1Places.push(3);
        playerTurn.innerHTML= "Player 2's turn";
        playSound()


    } else{

    }};

box4.onclick = function () {
    movesMade++;
    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
        player1Places.push(4);
        playerTurn.innerHTML= "Player 2's turn";
        playSound()



    } else{


    }};

box5.onclick = function () {
    movesMade++;
    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
        player1Places.push(5);
        playerTurn.innerHTML= "Player 2's turn";
        playSound()


    } else{

    }};

box6.onclick = function () {
    movesMade++;
    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
        player1Places.push(6);
        playerTurn.innerHTML= "Player 2's turn";
        playSound()


    }else{


    }};

box7.onclick =  function () {
    movesMade++;
    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
        player1Places.push(7);
        playerTurn.innerHTML= "Player 2's turn";
        playSound()


    } else{

    }};

box8.onclick = function () {
    movesMade++;
    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
        player1Places.push(8);
        playerTurn.innerHTML= "Player 2's turn";
        playSound()

    } else{


    }};

box9.onclick = function () {
    movesMade++
    if(currentTurn===1){
        event.target.innerHTML=player1;
        event.target.style.color = "white";
        currentTurn++;
        player1Places.push(9);
        playerTurn.innerHTML= "Player 2's turn";
        playSound()


    } else{



    }};

box1.onmousemove = function (){
    if (win1()) {
        player1Wins++
    }else if (win2()){
        player2Wins++
    }else if (movesMade>8){
        alert("Draw...");
        startNewGame()
    }
};
box2.onmousemove = function (){
    if (win1()) {
        player1Wins++
    }else if (win2()){
        player2Wins++
    }else if (movesMade>8){
        alert("Draw...");
        startNewGame()
    }
};
box3.onmousemove = function (){
    if (win1()) {
        player1Wins++
    }else if (win2()){
        player2Wins++
    }else if (movesMade>8){
        alert("Draw...");
        startNewGame()
    }
};
box4.onmousemove = function (){
    if (win1()) {
        player1Wins++
    }else if (win2()){
        player2Wins++
    }else if (movesMade>8){
        alert("Draw...");
        startNewGame()
    }
};
box5.onmousemove = function (){
    if (win1()) {
        player1Wins++
    }else if (win2()){
        player2Wins++
    }else if (movesMade>8){
        alert("Draw...");
        startNewGame()
    }
};
box6.onmousemove = function (){
    if (win1()) {
        player1Wins++
    }else if (win2()){
        player2Wins++
    }else if (movesMade>8){
        alert("Draw...");
        startNewGame()
    }
};
box7.onmousemove = function (){
    if (win1()) {
        player1Wins++
    }else if (win2()){
        player2Wins++
    }else if (movesMade>8){
        alert("Draw...");
        startNewGame()
    }
};
box8.onmousemove = function (){
    if (win1()) {
        player1Wins++
    }else if (win2()){
        player2Wins++
    }else if (movesMade>8){
        alert("Draw...");
        startNewGame()
    }
};
box9.onmousemove = function (){
    if (win1()) {
        player1Wins++
    }else if (win2()){
        player2Wins++
    }else if (movesMade>8){
        alert("Draw...");
        startNewGame()
    }
};





player1Score.innerHTML= (`<h3> Player 1: ${player1Wins}</h3>`);
player2Score.innerHTML= (`<h3> Player 2: ${player2Wins}</h3>`);

