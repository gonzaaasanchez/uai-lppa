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
        setStartButton('(Juego en curso)');
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
    showLevel();
    showLevelSequence(0);
}

function playAudio(color) {
    document.getElementById(color + "-sound").play();
}

function showLevelSequence(colorIndex) {
    showingLevelSecuence = true;
    setGameState('Mostrando secuencia');
    buttonPressed(sequence[colorIndex]);
    setTimeout(() => {
        buttonDefault(sequence[colorIndex]);
        var nextColorIndex = colorIndex + 1
        if (nextColorIndex < sequence.length) {
            setTimeout(() => {
                showLevelSequence(nextColorIndex)
            }, 500);
        } else {
            showingLevelSecuence = false;
            setGameState('Ingresá la secuencia');
        }
    }, 1000);
}

function colorClicked(color) {
    if (!showingLevelSecuence) {

        sequenceEntered.push(color);

        if (sequenceEntered.length <= sequence.length) {

            var currentColorIndex = sequenceEntered.length - 1
            buttonPressed(color);
            setTimeout(() => {
                buttonDefault(color);
            }, 250);

            if (sequenceEntered[currentColorIndex] == sequence[currentColorIndex]) {
                showPoints();
                if (sequenceEntered.length == sequence.length) {
                    setGameState('Correcto! Atento a la próxima secuencia');
                    setTimeout(() => {
                        createLevel();
                    }, 3000);
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
    document.getElementById(button).style.opacity = 0.5
}

function buttonDefault(button) {
    document.getElementById(button).style.opacity = 1
}

function clearGame() {
    gameStarted = false;
    currentLevel = 0
    currentPoints = 0;
    sequence = [];
    clearSequenceEntered();
    document.getElementById('level').innerText = 'Nivel: 0'
    document.getElementById('score').innerText = 'Puntos: 0'
}

function gameLost() {
    clearGame();
    setGameState('Juego no iniciado');
    setStartButton('Iniciar nuevo juego');
}

function showLevel() {
    currentLevel += 1;
    document.getElementById('level').innerText = 'Nivel: ' + currentLevel
}

function showPoints() {
    currentPoints += 1;
    document.getElementById('score').innerText = 'Puntos: ' + currentPoints
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