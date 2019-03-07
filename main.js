window.addEventListener('load', init);

//differents type de levels
const levels= {
    facile: 5,
    medium: 3,
    difficile: 2
}

const currentLevel = levels.medium;
let time = currentLevel;
let score = 0;
let isPlaying;

const numberInput = document.querySelector("#number-input");
const currentNumb = document.querySelector("#current-number");
const msg = document.querySelector("#message");
const displayTime = document.querySelector('#time');
const displayScore = document.querySelector('#score');
const seconds = document.querySelector('#seconds');
// declaring move variable
let moves = 0;
let counter = document.querySelector(".moves");

const numbers = [
    "0011",
    "0231",
    "2451",
    "1991",
    "1994",
    "1996",
    "2001",
    "1986",
    "1984",
    "1989",
    "1990",
    "2016",
    "1529",
    "1664",
    "0080"
];

function init(){
    showNumbers(numbers);
    setInterval(countDown, 5000);
    setInterval(checkStatus, 50);
    numberInput.addEventListener('input', startMatch)
}

// randomNumber & showNumber

function showNumbers(numbers){
    randNumber = Math.floor(Math.random() * numbers.length);
    currentNumb.innerHTML = numbers[randNumber];
}

function startMatch(){
    if(numberMatch()){
        console.log('MATCH');
        isPlaying = true;
        time = currentLevel;
        showNumbers(numbers);
        numberInput.value = '';
        score++;        
    }

    //iff score is -1, display 0
    if (score === -1){
        displayScore.innerHTML = 0;
    } else {
       displayScore.innerHTML = score;
    }

        // reset moves
    moves = 0;
    counter.innerHTML = moves;

}


function numberMatch(){
    if(numberInput.value < currentNumb.innerHTML){
        message.innerHTML = "La valeur deviné est plus petite"
    }
    else if(numberInput.value > currentNumb.innerHTML){
        message.innerHTML = "La valeur deviné est plus grande"
    }
    if(numberInput.value == "triche"){
        message.innerHTML = currentNumb.innerHTML
        
    }
    else if(numberInput.value === currentNumb.innerHTML){
        message.innerHTML = "Bravo!!"
        return true;
    } else {
        message.innerHTML = "";
        return false;
    }
}

function countDown(){
    if (time > 0){
        time--;
    } else if (time === 0){
        isPlaying = false;
    }
    displayTime.innerHTML = time;
}

function checkStatus(){
    if (!isPlaying && time === 0){
        message.innerHTML = "Jeu terminé!!";
        score = -1;
    }
}
// @description count player's moves
function moveCounter(){
    moves++;
    counter.innerHTML = moves;
    //start timer on first click
    if(moves == 1){
        second = 0;
        minute = 0; 
        hour = 0;
        startTimer();
    }
    
}

/*   <img class="domino" src = "images/Domino0-0.png"/>
          <img class="domino" src = "images/Domino0-1.png"/>
          <img class="domino" src = "images/Domino0-2.png"/>      
          <img class="domino" src = "images/Domino0-3.png"/>
          <img class="domino" src = "images/Domino0-4.png"/>
          <img class="domino" src = "images/Domino0-5.png"/>
          <img class="domino" src = "images/Domino0-6.png"/>
          <img class="domino" src = "images/Domino1-1.png"/>
          <img class="domino" src = "images/Domino1-2.png"/>
          <img class="domino" src = "images/Domino1-3.png"/>
          <img class="domino" src = "images/Domino1-4.png"/>
          <img class="domino" src = "images/Domino1-5.png"/>
          <img class="domino" type = "match" src = "images/Domino1-6.png"/>
          <img class="domino" src = "images/Domino2-2.png"/>
          <img class="domino" src = "images/Domino2-3.png"/>
          <img class="domino" src = "images/Domino2-4.png"/>
          <img class="domino" type = "some" src = "images/Domino2-5.png"/>
          <img class="domino" src = "images/Domino2-6.png"/>
          <img class="domino" src = "images/Domino3-3.png"/>
          <img class="domino" type = "match" src = "images/Domino3-4.png"/>
          <img class="domino" src = "images/Domino3-5.png"/>
          <img class="domino" type = "some" src = "images/Domino3-6.png"/>
          <img class="domino" src = "images/Domino4-4.png"/>
          <img class="domino" src = "images/Domino4-5.png"/>
          <img class="domino" src = "images/Domino4-6.png"/>
          <img class="domino" src = "images/Domino5-5.png"/>
          <img class="domino" src = "images/Domino5-6.png"/>
          <img class="domino" src = "images/Domino6-6.png"/>     
        
          <div class="player" id="player_0">
            <div class="name">Player 1</div>
            <div class="display-2 mb-5 domi"></div>
          </div>

          <div class="player" id="player_1">
            <div class="name">Player 2</div>
            <div class="display-2 mb-5 domi"></div>
          </div>

          <div class="player" id="player_2">
            <div class="name">Player 3</div>
            <div class="display-2 mb-5 domi"></div>
          </div>

          <div class="player" id="player_3">
            <div class="name">Player 4</div>
            <div class="display-2 mb-5 domi"></div>
          </div>
        </div>*/