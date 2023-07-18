var gameColors = ['green', 'red', 'blue', 'yellow'];
var sequence = [];
var sequenceEntered = [];
var currentLevel = 0;
var gameStarted = false;
var showingLevelSecuence = false;

function newGame() {
    if (gameStarted || showingLevelSecuence) {
        alert('Ya hay un juego en curso')
    } else {
        gameStarted = true;
        sequence = [];
        clearSequenceEntered();
        clearLevel();
        createNextLevel();
    }
}

function createNextLevel() {
    const randomColor = gameColors[Math.floor(Math.random() * gameColors.length)];
    sequence.push(randomColor);
    console.log("creada: " + sequence);
    clearSequenceEntered();
    showLevel();
    showLevelSequence(0);
}

function showLevelSequence(colorIndex) {
    showingLevelSecuence = true;
    setGameState('Mostrando secuencia');
    document.getElementById(sequence[colorIndex]).style.opacity = 0.5
    setTimeout(() => {
        document.getElementById(sequence[colorIndex]).style.opacity = 1
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
    if (gameStarted && !showingLevelSecuence) {
        sequenceEntered.push(color);
        console.log("entrada: " + sequenceEntered);

        if (sequenceEntered.length <= sequence.length) {
            var currentColorIndex = sequenceEntered.length - 1

            document.getElementById(color).style.opacity = 0.5
            setTimeout(() => {
                document.getElementById(color).style.opacity = 1
            }, 250);

            if (sequenceEntered[currentColorIndex] == sequence[currentColorIndex]) {
                if (sequenceEntered.length == sequence.length) {
                    setGameState('Correcto! Atento a la próxima secuencia');
                    setTimeout(() => {
                        createNextLevel();
                    }, 3000);
                }
            } else {
                alert('Ingresaste un color incorrecto! Máximo nivel alcanzado: ' + currentLevel);
                gameLost();
            }
        }
    }
}

function clearLevel() {
    currentLevel = 0
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

function gameLost() {
    gameStarted = false;
    setGameState("Juego finalizado");
}