// html objects

var buttonStart = document.getElementById('start-button');

var buttonGreen = document.getElementById('green');
var buttonRed = document.getElementById('red');
var buttonBlue = document.getElementById('blue');
var buttonYellow = document.getElementById('yellow');

var labelScore = document.getElementById('score');
var labelState = document.getElementById('state');

var nameInput = document.getElementById('input-name');

var modal = document.getElementById('modal');
var modalMessage = document.getElementById('modal-message');
var modalClose = document.getElementById('modal-close');

var buttonGithub = document.getElementById('button-github');
var buttonContact = document.getElementById('button-contact');

// listeners

nameInput.addEventListener('input', function () {
    nameInput.style.width = this.value.length + 'ch';
});

buttonStart.addEventListener('click', function () {
    newGame();
});

buttonGreen.addEventListener('click', function () {
    if (gameStarted) {
        colorClicked(GameColors.green);
    }
});

buttonRed.addEventListener('click', function () {
    if (gameStarted) {
        colorClicked(GameColors.red);
    }
});

buttonBlue.addEventListener('click', function () {
    if (gameStarted) {
        colorClicked(GameColors.blue);
    }
});

buttonYellow.addEventListener('click', function () {
    if (gameStarted) {
        colorClicked(GameColors.yellow);
    }
});

modalClose.addEventListener('click', function () {
    closeModal();
});


buttonGithub.addEventListener('click', function () {
    window.open('https://github.com/gonzaaasanchez/uai-lppa/tree/main/simon-game-final', '_blank');
});

buttonContact.addEventListener('click', function () {
    window.location.href = 'contact.html';
});

// const

const PlayingStatus = {
    notStarted: 'JUEGO NO INICIADO',
    sequenceShowing: 'MOSTRANDO SECUENCIA',
    sequenceWaiting: 'INGRESÁ LA SECUENCIA',
    sequenceCorrect: '¡CORRECTO!',
};

const GameColors = {
    green: 'green',
    red: 'red',
    blue: 'blue',
    yellow: 'yellow',
};

// variables

var gameColors = [GameColors.green, GameColors.red, GameColors.blue, GameColors.yellow];
var sequence = [];
var sequenceEntered = [];
var currentLevel = 0;
var currentPoints = 0;
var gameStarted = false;
var showingLevelSecuence = false;

// functions

window.onload = function () {
    clearGame();
}

function openModal(message) {
    modalMessage.innerText = message;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

function newGame() {
    if (nameInput.value.length < 3) {
        openModal('Ingresá un nombre de más de 3 caracteres');
        return;
    }
    nameInput.disabled = true;
    if (!gameStarted && !showingLevelSecuence) {
        gameStarted = true;
        setStartButton('EN CURSO');
        // audio not played and showing error inside setTimeout -> FIX
        // setTimeout(() => {
        createLevel();
        // }, 1000);
    }
}

function createLevel() {
    const randomColor = gameColors[Math.floor(Math.random() * gameColors.length)];
    sequence.push(randomColor);
    clearSequenceEntered();
    showLevelSequence(0);
}

function playAudio(color) {
    document.getElementById(color + '-sound').play();
}

function showLevelSequence(colorIndex) {
    showingLevelSecuence = true;
    setGameState(PlayingStatus.sequenceShowing);
    buttonPressed(sequence[colorIndex]);
    setTimeout(() => {
        var nextColorIndex = colorIndex + 1
        if (nextColorIndex < sequence.length) {
            setTimeout(() => {
                showLevelSequence(nextColorIndex)
            }, 500);
        } else {
            showingLevelSecuence = false;
            setGameState(PlayingStatus.sequenceWaiting);
        }
    }, 1000);
}

function colorClicked(color) {
    if (!showingLevelSecuence) {

        sequenceEntered.push(color);
        buttonPressed(color);

        if (sequenceEntered.length <= sequence.length) {

            var currentColorIndex = sequenceEntered.length - 1

            if (sequenceEntered[currentColorIndex] == sequence[currentColorIndex]) {
                currentPoints += 1;
                showPoints(currentPoints);
                if (sequenceEntered.length == sequence.length) {
                    setGameState(PlayingStatus.sequenceCorrect);
                    setTimeout(() => {
                        createLevel();
                    }, 2000);
                }
            } else {
                gameLost();
                openModal('Ingresaste un color incorrecto! Perdiste :(\nPuntos alcanzados: ' + currentPoints);
            }
        }
    }
}

function buttonPressed(button) {
    switch (button) {
        case GameColors.red:
            buttonRed.style.background = 'tomato';
            break;
        case GameColors.blue:
            buttonBlue.style.background = 'lightskyblue';
            break;
        case GameColors.green:
            buttonGreen.style.background = 'lightgreen';
            break;
        case GameColors.yellow:
            buttonYellow.style.background = 'yellow';
            break;
    };
    playAudio(button);
    setTimeout(() => {
        buttonDefault(button);
    }, 250);
}

function buttonDefault(button) {
    switch (button) {
        case GameColors.red:
            buttonRed.style.background = 'darkRed';
            break;
        case GameColors.blue:
            buttonBlue.style.background = 'darkBlue';
            break;
        case GameColors.green:
            buttonGreen.style.background = 'darkGreen';
            break;
        case GameColors.yellow:
            buttonYellow.style.background = 'goldenrod';
            break;
    };
}

function clearGame() {
    gameStarted = false;
    currentLevel = 0
    currentPoints = 0;
    sequence = [];
    nameInput.disabled = false;
    clearSequenceEntered();
    setGameState(PlayingStatus.notStarted);
    setStartButton('INICIAR');
    showPoints(0);
}

function gameLost() {
    clearGame();
}

function showPoints(value) {
    labelScore.innerText = 'PUNTOS: ' + value;
}

function clearSequenceEntered() {
    sequenceEntered = [];
}

function setGameState(newState) {
    labelState.innerText = newState;
    switch (newState) {
        case PlayingStatus.notStarted:
            labelState.style.color = 'white';
            break;
        case PlayingStatus.sequenceShowing:
            labelState.style.color = 'yellow';
            break;
        case PlayingStatus.sequenceWaiting:
            labelState.style.color = 'tomato';
            break;
        case PlayingStatus.sequenceCorrect:
            labelState.style.color = 'lightgreen';
            break;
    }
}

function setStartButton(title) {
    buttonStart.innerText = title;
}