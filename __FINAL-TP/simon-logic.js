var gameColors = ['green', 'red', 'blue', 'yellow'];
var sequence = [];
var sequenceEntered = [];
var currentLevel = 0;
var gameStarted = false;
var showingLevelSecuence = false;

function newGame() {
    if (!gameStarted && !showingLevelSecuence) {
        gameStarted = true;
        clearSequenceEntered();
        clearLevel();
        createNextLevel();
        setStartButton("(Juego en curso)");
    }
}

function createNextLevel() {
    const randomColor = gameColors[Math.floor(Math.random() * gameColors.length)];
    sequence.push(randomColor);
    clearSequenceEntered();
    showLevel();
    showLevelSequence(0);
}

function showLevelSequence(colorIndex) {
    showingLevelSecuence = true;
    setGameState('Mostrando secuencia');
    buttonSimulatePressed(sequence[colorIndex]);
    setTimeout(() => {
        buttonDefault(sequence[colorIndex]);
        var nextColorIndex = colorIndex + 1
        if (nextColorIndex < sequence.length) {
            setTimeout(() => {
                showLevelSequence(nextColorIndex)
            }, 1000);
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

            buttonSimulatePressed(color);
            setTimeout(() => {
                buttonDefault(color);
            }, 250);

            if (sequenceEntered[currentColorIndex] == sequence[currentColorIndex]) {
                if (sequenceEntered.length == sequence.length) {
                    setGameState('Correcto! Atento a la próxima secuencia');
                    setTimeout(() => {
                        createNextLevel();
                    }, 3000);
                }
            } else {
                alert('Ingresaste un color incorrecto! Perdiste :(');
                gameLost();
            }
        }
    }
}

function buttonSimulatePressed(button) {
    document.getElementById(button).style.opacity = 0.5
}

function buttonDefault(button) {
    document.getElementById(button).style.opacity = 1
}

function clearLevel() {
    currentLevel = 0
    sequence = [];
    document.getElementById('score').innerText = 'Nivel: ' + currentLevel
}

function showLevel() {
    currentLevel += 1;
    document.getElementById('score').innerText = 'Nivel: ' + currentLevel
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

function gameLost() {
    gameStarted = false;
    setGameState("Juego finalizado");
    document.getElementById('score').innerText = 'Nivel alcanzado: ' + currentLevel
    setStartButton("Jugar de nuevo");
}