// html objects

var buttonStart = document.getElementById('start-button');

var buttonGreen = document.getElementById('green');
var buttonRed = document.getElementById('red');
var buttonBlue = document.getElementById('blue');
var buttonYellow = document.getElementById('yellow');

var labelScore = document.getElementById('score');
var labelState = document.getElementById('state');

// listeners
buttonStart.addEventListener('click', function () {
    newGame();
});

buttonGreen.addEventListener('click', function () {
    if (gameStarted) {
        colorClicked('green');
    }
});

buttonRed.addEventListener('click', function () {
    if (gameStarted) {
        colorClicked('red');
    }
});

buttonBlue.addEventListener('click', function () {
    if (gameStarted) {
        colorClicked('blue');
    }
});

buttonYellow.addEventListener('click', function () {
    if (gameStarted) {
        colorClicked('yellow');
    }
});

// variables

var gameColors = ['green', 'red', 'blue', 'yellow'];
var sequence = [];
var sequenceEntered = [];
var currentLevel = 0;
var currentPoints = 0;
var gameStarted = false;
var showingLevelSecuence = false;

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

// functions

function newGame() {
    if (!gameStarted && !showingLevelSecuence) {
        gameStarted = true;
        setStartButton('JUEGO EN CURSO');
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
    document.getElementById(color + "-sound").play();
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
                showPoints();
                if (sequenceEntered.length == sequence.length) {
                    setGameState(PlayingStatus.sequenceCorrect);
                    setTimeout(() => {
                        createLevel();
                    }, 2000);
                }
            } else {
                // TODO mostrar modal
                alert('Ingresaste un color incorrecto! Perdiste :(\nPuntos alcanzados: ' + currentPoints);
                gameLost();
            }
        }
    }
}

function buttonPressed(button) {
    switch (button) {
        case 'red':
            buttonRed.style.background = "tomato";
            break;
        case 'blue':
            buttonBlue.style.background = "lightskyblue";
            break;
        case 'green':
            buttonGreen.style.background = "lightgreen";
            break;
        case 'yellow':
            buttonYellow.style.background = "yellow";
            break;
    };
    playAudio(button);
    setTimeout(() => {
        buttonDefault(button);
    }, 250);
}

function buttonDefault(button) {
    switch (button) {
        case 'red':
            buttonRed.style.background = "darkRed";
            break;
        case 'blue':
            buttonBlue.style.background = "darkBlue";
            break;
        case 'green':
            buttonGreen.style.background = "darkGreen";
            break;
        case 'yellow':
            buttonYellow.style.background = "goldenrod";
            break;
    };
}

function clearGame() {
    gameStarted = false;
    currentLevel = 0
    currentPoints = 0;
    sequence = [];
    clearSequenceEntered();
    labelScore.innerText = 'PUNTOS: 0'
}

function gameLost() {
    clearGame();
    setGameState(PlayingStatus.notStarted);
    setStartButton('INICIAR NUEVO JUEGO');
}


function showPoints() {
    currentPoints += 1;
    labelScore.innerText = 'PUNTOS: ' + currentPoints
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