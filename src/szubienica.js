const board = document.getElementById('plansza');
const alphabetDiv = document.getElementById('alphabet');
const imagine = document.getElementById('imagine');
const lettersAlphabet = ["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ź","Ż"];
const categoryRandom = document.getElementById('category');
const numberError = document.getElementById('error');
const time = document.getElementById('time');
let invisiblePassword = '';
let errorShot = 0;
let password =JSON.parse(localStorage.getItem('object'));
const laczenie  =password[0].join('').split(' ');

const randomCategory = localStorage.getItem('categoryName')
categoryRandom.textContent = `Kategoria: ${randomCategory}`

for(let i=0;i<laczenie.length;i++){
    const divCreate = document.createElement('div');
    divCreate.setAttribute('id', 'devForLetter');
    board.appendChild(divCreate);
}
const div = [...document.querySelectorAll('#devForLetter')];
const dlugoscZdaniaWIlosciWyrazow = div.length;
let iloscWyrazowWDivie= 0;
let iloscliter= 0;

function divsLetter(){
        for(let i=0;i<password[0].length;i++){
            const span = document.createElement('span');
            if(laczenie[iloscliter].length){
                if(password[0][i]===' '){
                   console.log('spacja')
                    invisiblePassword = invisiblePassword +' ';
                    span.textContent =invisiblePassword[i];
                    div[iloscliter].appendChild(span).style.display = "inline-block"; 
                    div[iloscliter].appendChild(span).style.width = 15+"px";
                    iloscliter++
                    
                } else if(password[0][i]===','){       
                    invisiblePassword = invisiblePassword +','
                    span.textContent =invisiblePassword[i];
                    div[iloscliter].appendChild(span); 
                    // iloscliter++
                } else {
                    invisiblePassword = invisiblePassword +'-'; 
                    span.textContent =invisiblePassword[i];
                    div[iloscliter].appendChild(span); 
                }
            }
        }
}
divsLetter()
const spn = document.querySelectorAll('span');

for(let i=0;i<spn.length;i++){
    if(spn[i].textContent ==="-"){
        spn[i].classList.add('cssSpan');
    } 
}
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
        return this.substr(0,position)+sign+this.substr(position+1)};
}
function showLetter(thisLetter,indexAlphabet){
    let flag = false;
    let passLength = password[0].length;
    for(let i=0; i<passLength; i++){
        if(password[0][i].toUpperCase() === lettersAlphabet[indexAlphabet]){
            spn[i].textContent = lettersAlphabet[indexAlphabet];
            spn[i].color = 'green'
            flag =true;
            invisiblePassword = invisiblePassword.replaceSign(i,lettersAlphabet[indexAlphabet]);
        }
    }
    if(flag === false){
        
        imagine.src=`/img/wisielec${errorShot}.png`;
        thisLetter.style.backgroundColor= "red";
        stopGame()
        errorShot++;
        numberError.textContent ="Ilość błędów: " + errorShot ;
    }
    else {
        thisLetter.style.backgroundColor= "green";
        flag =false;
    };
}
let sec = 0;
const addSec =  setInterval(() => {
    sec++
    time.textContent = "Czas "+(sec/10).toFixed(1);
}, 100);
function stopGame(){
const p = document.getElementById('results');
    if(password[0].join('').toUpperCase() === invisiblePassword){
       
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
    if(this.style.backgroundColor === "red") {
        // console.log(this.)
        console.log('red')
        return
    }
    // console.log(thisLetter)
    // thisLetter.removeEventListener('click',showLetter);
    let indexAlphabet = thisLetter.id;
    showLetter(thisLetter,indexAlphabet);
    stopGame();
}
const lettersDiv = [...document.querySelectorAll('div.letter')];
lettersDiv.forEach(letter=>letter.addEventListener('click', game));

