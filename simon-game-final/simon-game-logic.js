/* html objects */

var buttonStart = document.getElementById('start-button');

var buttonGreen = document.getElementById('green');
var buttonRed = document.getElementById('red');
var buttonBlue = document.getElementById('blue');
var buttonYellow = document.getElementById('yellow');

var labelLevel = document.getElementById('level');
var labelScore = document.getElementById('score');
var labelTimer = document.getElementById('timer');
var labelState = document.getElementById('state');

var nameInput = document.getElementById('input-name');

var modal = document.getElementById('modal');
var modalMessage = document.getElementById('modal-message');
var modalClose = document.getElementById('modal-close');

var buttonGithub = document.getElementById('button-github');
var buttonScore = document.getElementById('button-score');
var buttonContact = document.getElementById('button-contact');

var ranking = document.getElementById('ranking');
var rankingList = document.getElementById('ranking-list');
var rankingClose = document.getElementById('ranking-close');

var rankingPositionButton = document.getElementById('ranking-position-title');
var rankingNameButton = document.getElementById('ranking-name-title');
var rankingLevelButton = document.getElementById('ranking-level-title');
var rankingPointsButton = document.getElementById('ranking-points-title');
var rankingDateButton = document.getElementById('ranking-date-title');

/* listeners */

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


rankingClose.addEventListener('click', function () {
    closeModal();
});


buttonGithub.addEventListener('click', function () {
    window.open('https://github.com/gonzaaasanchez/uai-lppa/tree/main/simon-game-final', '_blank');
});

buttonContact.addEventListener('click', function () {
    window.location.href = 'contact.html';
});

buttonScore.addEventListener('click', function () {
    showRanking(RankingOrder.points);
});

rankingPositionButton.addEventListener('click', function () {
    showRanking(RankingOrder.points);
});

rankingNameButton.addEventListener('click', function () {
    showRanking(RankingOrder.name);
});

rankingLevelButton.addEventListener('click', function () {
    showRanking(RankingOrder.level);
});

rankingPointsButton.addEventListener('click', function () {
    showRanking(RankingOrder.points);
});

rankingDateButton.addEventListener('click', function () {
    showRanking(RankingOrder.date);
});

/* const */

var PlayingStatus = {
    notStarted: 'JUEGO NO INICIADO',
    sequenceShowing: 'MOSTRANDO SECUENCIA',
    sequenceWaiting: 'INGRESÁ LA SECUENCIA',
    sequenceCorrect: '¡CORRECTO!',
};

var GameColors = {
    green: 'green',
    red: 'red',
    blue: 'blue',
    yellow: 'yellow',
};

var RankingOrder = {
    name: 'name',
    level: 'level',
    points: 'points',
    date: 'date',
};

/* variables */

var gameColors = [GameColors.green, GameColors.red, GameColors.blue, GameColors.yellow];
var sequence = [];
var sequenceEntered = [];
var currentLevel = 0;
var currentPoints = 0;
var finalPoints = 0;
var gameStarted = false;
var showingLevelSecuence = false;
var timer;
var hours = 0;
var minutes = 0;
var seconds = 0;

/* functions  */

window.onload = function () {
    clearGame();
};

function openModal(message) {
    modalMessage.innerText = message;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
    ranking.style.display = 'none';
}

function newGame() {
    if (nameInput.value.length < 3) {
        openModal('Ingresá un nombre de más de 3 caracteres');
        return;
    }
    nameInput.disabled = true;
    startTimer();
    if (!gameStarted && !showingLevelSecuence) {
        gameStarted = true;
        setStartButton('EN CURSO');
        // audio not played and showing error inside setTimeout -> FIX
        // setTimeout(function() {
        createLevel();
        // }, 1000);
    }
}

function startTimer() {
    timer = setInterval(function () {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        showTimer(to2Places(hours) + ':' + to2Places(minutes) + ':' + to2Places(seconds));
    }, 1000);
}

function clearTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    showTimer('00:00:00');
}

function createLevel() {
    currentLevel++;
    showLevel(currentLevel);
    var randomColor = gameColors[Math.floor(Math.random() * gameColors.length)];
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
    setTimeout(function () {
        var nextColorIndex = colorIndex + 1;
        if (nextColorIndex < sequence.length) {
            setTimeout(function () {
                showLevelSequence(nextColorIndex);
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

            var currentColorIndex = sequenceEntered.length - 1;

            if (sequenceEntered[currentColorIndex] == sequence[currentColorIndex]) {
                currentPoints += 1;
                showPoints(currentPoints);
                if (sequenceEntered.length == sequence.length) {
                    setGameState(PlayingStatus.sequenceCorrect);
                    setTimeout(function () {
                        createLevel();
                    }, 2000);
                }
            } else {
                showFinalResults();
                saveResult();
                clearGame();
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
    }
    playAudio(button);
    setTimeout(function () {
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
    }
}

function getRanking() {
    var storedRanking = localStorage.getItem('ranking');
    return storedRanking ? JSON.parse(storedRanking) : [];
}

function updateRanking(newItem) {
    var ranking = getRanking();
    ranking.push(newItem);
    localStorage.setItem('ranking', JSON.stringify(ranking));
}

function showFinalResults() {
    finalPoints = currentPoints - calculatePenalization();
    var points = 'Puntos alcanzados: ' + currentPoints;
    var penalization = 'Penalización: ' + calculatePenalization();
    var final = 'PUNTAJE FINAL: ' + finalPoints;
    openModal('Ingresaste un color incorrecto! Perdiste :(\n\n' + points + '\n' + penalization + '\n\n' + final);
}

function saveResult() {
    var result = {
        name: nameInput.value,
        level: currentLevel,
        points: finalPoints,
        date: Date(Date.now()),
    };
    updateRanking(result);
}

function showRanking(order) {
    ranking.style.display = 'flex';
    rankingList.innerHTML = '';

    var storedRanking = getRanking();
    storedRanking = storedRanking.sort(function (a, b) { return b.points - a.points; });
    storedRanking = storedRanking.slice(0, 10);

    var rankingWithPosition = storedRanking.map((item, index) => ({
        ...item,
        position: index + 1,
    }));

    switch (order) {
        case RankingOrder.name:
            rankingWithPosition = rankingWithPosition.sort(function (a, b) { return a.name.localeCompare(b.name); });
            break;
        case RankingOrder.level:
            rankingWithPosition = rankingWithPosition.sort(function (a, b) { return b.level - a.level; });
            break;
        case RankingOrder.points:
            rankingWithPosition = rankingWithPosition.sort(function (a, b) { return b.points - a.points; });
            break;
        case RankingOrder.date:
            rankingWithPosition = rankingWithPosition.sort(function (a, b) { return Date(b.date) > Date(a.date); });
            break;
    }

    while (rankingWithPosition.length < 10) {
        rankingWithPosition.push({
            name: '-',
            level: '-',
            points: '-',
            date: '-',
            position: 10,
        });
    }

    rankingWithPosition.forEach(function (item) {
        var rankingItem = document.createElement('li');
        rankingItem.classList.add('ranking-item');
        rankingItem.innerHTML = createSpanRankingItem('# ' + item.position) + createSpanRankingItem(item.name.toUpperCase()) + createSpanRankingItem(item.level) + createSpanRankingItem(item.points)+ createSpanRankingItem(visualFormattedDatetime(item.date));
        rankingList.appendChild(rankingItem);
    });
}

function createSpanRankingItem(value) {
    return '<span>' + value + '</span>';
}

function clearGame() {
    gameStarted = false;
    currentLevel = 0;
    currentPoints = 0;
    finalPoints = 0;
    sequence = [];
    nameInput.disabled = false;
    clearSequenceEntered();
    setGameState(PlayingStatus.notStarted);
    setStartButton('INICIAR');
    showLevel(0);
    showPoints(0);
    clearTimer();
}

function showLevel(value) {
    labelLevel.innerText = 'Nvl: ' + value;
}

function showPoints(value) {
    labelScore.innerText = 'Pts: ' + value;
}

function showTimer(value) {
    labelTimer.innerText = value;
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

/* utils */

function to2Places(value) {
    return String(value).padStart(2, '0');
}

function calculatePenalization() {
    return Math.trunc(((hours * 60 * 60) + (minutes * 60) + seconds) / 15);
}

function visualFormattedDatetime(datetime) {
    var parsedDate = new Date(datetime);
    if (isNaN(parsedDate)) {
        return '-';
    }
    var day = to2Places(parsedDate.getDate());
    var month = to2Places(parsedDate.getMonth() + 1);
    var year = parsedDate.getFullYear();
    var hours = to2Places(parsedDate.getHours());
    var minutes = to2Places(parsedDate.getMinutes());

    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
}