const board = document.getElementById('plansza');
const alphabetDiv = document.getElementById('alphabet');
const imagine = document.getElementById('imagine');
const lettersAlphabet = ["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ź","Ż"];
const categoryRandom = document.getElementById('category');
const numberError = document.getElementById('error');
const time = document.getElementById('time');
const password= 'ab'.toUpperCase();
const length = password.length;
let invisiblePassword = '';
let errorShot = 0;


for(let i =0; i<length;i++){
    if(password[i]===' '){
        invisiblePassword = invisiblePassword +'_';
    } else {
        invisiblePassword = invisiblePassword +'-'; 
    }
}
function showPassword(){
    board.textContent = invisiblePassword;
    
}
showPassword();
function showAlphabet(){
    for(let i=0; i<lettersAlphabet.length;i++){
    const newDiv=  document.createElement('div');
    newDiv.classList.add('letter');
    newDiv.setAttribute('id',i)
    newDiv.innerHTML = lettersAlphabet[i];
    alphabetDiv.appendChild(newDiv);
    }
}
showAlphabet()
String.prototype.replaceSign = function(position, sign){
    if(position>this.length-1){
        return this.toString();
    } else{
        return this.substr(0,position)+sign+this.substr(position+1)}
}
function showLetter(thisLetter,indexAlphabet){
    let flag = false;
    let passLength = password.length;
    for(let i=0; i<passLength; i++){
        if(password[i] === lettersAlphabet[indexAlphabet]){
            flag =true;
            invisiblePassword=  invisiblePassword.replaceSign(i,lettersAlphabet[indexAlphabet]);
        }
    }
    if(flag === false){
        imagine.src=`/game/imgW/wisielec${errorShot}.png`;
        thisLetter.style.backgroundColor= "red";
        stopGame()
        errorShot++;
        numberError.textContent ="Ilość błędów: " + errorShot ;
    }
    else {
        thisLetter.style.backgroundColor= "green";
        flag =false;
    }
}

let sec = 0;
const addSec =  setInterval(() => {
    sec++
    time.textContent = "Czas "+(sec/10).toFixed(1);
}, 100);

function stopGame(){
const p = document.getElementById('results');
    if(password === invisiblePassword){
        p.textContent = "Wygrałeś";
        p.classList.add('result');
        p.style.color = "green"
        clearInterval(addSec)
        return lettersDiv.forEach(letter=>letter.removeEventListener('click', game))
    }
    if(errorShot === 8) {
        p.textContent = "PRZEGRAŁEŚ";
        p.classList.add('result')
        clearInterval(addSec)
        return lettersDiv.forEach(letter=>letter.removeEventListener('click', game))
    }
}
function game(){
    const thisLetter =  this;
    thisLetter.removeEventListener('click',showLetter);
    let indexAlphabet = thisLetter.id;
    showLetter(thisLetter,indexAlphabet);
    showPassword()
    stopGame();
    
}
const lettersDiv = [...document.querySelectorAll('div.letter')]
lettersDiv.forEach(letter=>letter.addEventListener('click', game))