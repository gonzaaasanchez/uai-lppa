var gameColors = ['green', 'red', 'blue', 'yellow'];
var sequence = [];
var sequenceEntered = [];
var currentLevel = 0;
var currentPoints = 0;
var gameStarted = false;
var showingLevelSecuence = false;

function newGame() {
    if (!gameStarted && !showingLevelSecuence) {
        gameStarted = true;
        setStartButton('JUEGO EN CURSO');
        // TODO audio not played inside Timeout
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
    setGameState('MOSTRANDO SECUENCIA');
    buttonPressed(sequence[colorIndex]);
    setTimeout(() => {
        var nextColorIndex = colorIndex + 1
        if (nextColorIndex < sequence.length) {
            setTimeout(() => {
                showLevelSequence(nextColorIndex)
            }, 500);
        } else {
            showingLevelSecuence = false;
            setGameState('INGRESÁ LA SECUENCIA');
        }
    }, 1000);
}

function colorClicked(color) {
    if (!showingLevelSecuence) {

        sequenceEntered.push(color);

        if (sequenceEntered.length <= sequence.length) {

            var currentColorIndex = sequenceEntered.length - 1
            buttonPressed(color);

            if (sequenceEntered[currentColorIndex] == sequence[currentColorIndex]) {
                showPoints();
                if (sequenceEntered.length == sequence.length) {
                    setGameState('CORRECTO!');
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
    playAudio(button);
    switch (button) {
        case 'red':
            document.getElementById(button).style.background = "tomato";
            break;
        case 'blue':
            document.getElementById(button).style.background = "lightskyblue";
            break;
        case 'green':
            document.getElementById(button).style.background = "lightgreen";
            break;
        case 'yellow':
            document.getElementById(button).style.background = "yellow";
            break;
    };
    setTimeout(() => {
        buttonDefault(button);
    }, 250);
}

function buttonDefault(button) {
    switch (button) {
        case 'red':
            document.getElementById(button).style.background = "darkRed";
            break;
        case 'blue':
            document.getElementById(button).style.background = "darkBlue";
            break;
        case 'green':
            document.getElementById(button).style.background = "darkGreen";
            break;
        case 'yellow':
            document.getElementById(button).style.background = "goldenrod";
            break;
    };
}

function clearGame() {
    gameStarted = false;
    currentLevel = 0
    currentPoints = 0;
    sequence = [];
    clearSequenceEntered();
    document.getElementById('score').innerText = 'PUNTOS: 0'
}

function gameLost() {
    clearGame();
    setGameState('JUEGO NO INICIADO');
    setStartButton('INICIAR NUEVO JUEGO');
}


function showPoints() {
    currentPoints += 1;
    document.getElementById('score').innerText = 'PUNTOS: ' + currentPoints
}

function clearSequenceEntered() {
    sequenceEntered = [];
}

function setGameState(newState) {
    document.getElementById('state').innerText = newState;
}

function setStartButton(title) {
    document.getElementById('start-button').innerText = title;
}