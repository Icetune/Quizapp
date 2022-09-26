let questions = [

    {
        "question": "Was bedeuten die Zahlen 1 und 0 in der Informatik?",
        "answer_1": "true/false",
        "answer_2": "up/down",
        "answer_3": "left/right",
        "answer_4": "top/bottom",
        "right_answer": 1
    },
    {
        "question": "An welcher Sprache orientieren sich die meisten Programmiersprachen?",
        "answer_1": "Deutsch",
        "answer_2": "Englisch",
        "answer_3": "Französisch",
        "answer_4": "Spanisch",
        "right_answer": 2
    },
    {
        "question": "Welche Textausgabe lernt man in den meisten Programmiersprachen als erstes?",
        "answer_1": "New Website",
        "answer_2": "Under Construction",
        "answer_3": "Welcome",
        "answer_4": "Hello World",
        "right_answer": 4
    },
    {
        "question": "Welche Maßeinheit aus der Digitaltechnik gibt es nicht?",
        "answer_1": "Megabyte",
        "answer_2": "Terabyte",
        "answer_3": "Zulerbyte",
        "answer_4": "Petabyte",
        "right_answer": 3
    },
    {
        "question": "Welchen Wert hat die vorzeichenlose Binärzahl 11111110 im Dezimalsystem?",
        "answer_1": "1",
        "answer_2": "127",
        "answer_3": "254",
        "answer_4": "15",
        "right_answer": 3
    },
    {
        "question": "Wie nennt man den Text in dem Computerprogramme geschrieben werden?",
        "answer_1": "Geheimtext",
        "answer_2": "Funktionstext",
        "answer_3": "Ausführungstext",
        "answer_4": "Quelltext",
        "right_answer": 4
    },
    {
        "question": "Was ist keine Spiele Engine?",
        "answer_1": "Source Engine",
        "answer_2": "Unreal Engine",
        "answer_3": "Cry Engine",
        "answer_4": "Wall Engine",
        "right_answer": 4
    },
    {
        "question": "Wobei handelt es sich um eine Programmiersprache?",
        "answer_1": "Queens",
        "answer_2": "Westminister",
        "answer_3": "Hollywood",
        "answer_4": "Spandau",
        "right_answer": 3
    },
    {
        "question": "Was ist die jüngste Programmiersprache?",
        "answer_1": "Java",
        "answer_2": "AppleScript",
        "answer_3": "Amiga E",
        "answer_4": "Swift",
        "right_answer": 4
    },
    {
        "question": "Was ist keine Programmiersprache?",
        "answer_1": "C*",
        "answer_2": "C#",
        "answer_3": "C",
        "answer_4": "C++",
        "right_answer": 1
    },

];

//////////////////////////////////////////////////////////////////////

let rightAnswers = 0;
let currentQuestion = 0;

let AUDIO_SUCCESS = new Audio('sounds/right.mp3');
let AUDIO_FAIL = new Audio('sounds/wrong.mp3');


//----------------JAVA SCRIPT CODE----------------//


function init() { //The game starts
    startScreenHTML();
}

function showFirstQuestion() {
    questionsHTML();
    showQuestion();
}

function showQuestion() { //The next question will be shown, or the End-Screen

    if (gameIsOver()) {
        updateProgressBar();
        showEndscreen();
    }
    else {
        updateToNextQuestion();
        updateProgressBar();
    }

}

function answer(selection) { // Checks if the answer is right or wrong

    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (answerIsCorrect(selectedQuestionNumber, question)) {
        rightAnswer(selection);
    }
    else {
        wrongAnswer(selection, idOfRightAnswer);
    }

    enableNextBtn();
    lockAnswers();

}

function nextQuestion() { // shows next question and resets last one

    currentQuestion++;
    resetQuestion();
    showQuestion();
    releaseAnswers();

}

function restartGame() { // restarts the game

    rightAnswers = 0;
    currentQuestion = 0;

    init();

}

function previousQuestion() {
    alert('There is no turning back at this point!');
}

function joke() {
    alert('Du hast Freunde mit denen du das teilen willst?!')
}

function otherQuiz() {
    alert('other challanges will be available soon')
}

//----------------JAVA SCRIPT CODE----------------//


function test() {
    console.log('alhamdudilah')
}


//----------------JAVA SCRIPT CODE HELP FUNCTIONS----------------//

//////////////////////////////////////////////////////////////////

function enableNextBtn() {
    document.getElementById('next-button').disabled = false;
    document.getElementById('next-button').classList.add('btn-enabled');
}

function lockAnswers() {
    document.getElementById('card1').style.pointerEvents = 'none';
    document.getElementById('card2').style.pointerEvents = 'none';
    document.getElementById('card3').style.pointerEvents = 'none';
    document.getElementById('card4').style.pointerEvents = 'none';
}

function releaseAnswers() {
    document.getElementById('card1').style.pointerEvents = 'auto'; 
    document.getElementById('card2').style.pointerEvents = 'auto'; 
    document.getElementById('card3').style.pointerEvents = 'auto'; 
    document.getElementById('card4').style.pointerEvents = 'auto'; 
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndscreen() {
    endScreenHTML();
    document.getElementById('solved-questions').innerHTML = rightAnswers;
    document.getElementById('questions-amount').innerHTML = questions.length;
}

function updateProgressBar() {
    let percent = Math.round((currentQuestion / questions.length) * 100);
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer_text_1').innerHTML = question['answer_1'];
    document.getElementById('answer_text_2').innerHTML = question['answer_2'];
    document.getElementById('answer_text_3').innerHTML = question['answer_3'];
    document.getElementById('answer_text_4').innerHTML = question['answer_4'];

    if (currentQuestion >= 1) {
        document.getElementById('previous-button').disabled = false;
    } else {
        document.getElementById('previous-button').disabled = true;
    }
}

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

function answerIsCorrect(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer']
}

function rightAnswer(selection) {

    AUDIO_SUCCESS.play();
    document.getElementById(selection).parentNode.classList.remove('hover-bg');
    document.getElementById(selection).parentNode.classList.add('right-card');
    document.getElementById(selection).classList.add('right-letter');
    rightAnswers++;

}

function wrongAnswer(selection, idOfRightAnswer) {

    AUDIO_FAIL.play();
    document.getElementById(selection).parentNode.classList.remove('hover-bg');
    document.getElementById(selection).parentNode.classList.add('wrong-card');
    document.getElementById(selection).classList.add('wrong-letter');

    document.getElementById(idOfRightAnswer).parentNode.classList.remove('hover-bg');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('right-card');
    document.getElementById(idOfRightAnswer).classList.add('right-letter');

}

//////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////

function resetQuestion() {

    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove('right-card');
        document.getElementById(`answer_${i}`).parentNode.classList.remove('wrong-card');
        document.getElementById(`answer_${i}`).classList.remove('right-letter');
        document.getElementById(`answer_${i}`).classList.remove('wrong-letter');
        document.getElementById(`answer_${i}`).parentNode.classList.add('hover-bg');
    }

    document.getElementById('next-button').disabled = true;
    document.getElementById('next-button').classList.remove('btn-enabled');

}

//////////////////////////////////////////////////////////////////

//----------------JAVA SCRIPT CODE HELP FUNCTIONS----------------//





//----------------JAVA SCRIPT HTML SCHNIPSEL----------------//


function startScreenHTML() {
    document.getElementById('rightside').innerHTML = ``;
    document.getElementById('rightside').innerHTML = `
    
    <div id="start-screen" class="right-screen start-bg">

        <h2 class="pt-bold">Welcome to</h2>
        <h2 class="pt-bold">The Awesome HTML Quiz</h2>
        <p class="pt-regular">Ready for the Challange?</p>

        <button onclick="showFirstQuestion()" type="button" class="btn btn-danger">START NOW <img class="start-btn-img"
        src="img/next.png"></button>

    </div>
    
    `;
}

function questionsHTML() {
    document.getElementById('rightside').innerHTML = ``;
    document.getElementById('rightside').innerHTML = `
    
    <div id="question-body">

        <div class="card-body">
            <h5 class="card-title" id="question_text">Wer hat HTML erfunden?</h5>

            <div id="card1" class="card quiz-answer-card mb-2 hover-bg" onclick="answer('answer_1')">
                <span class="answer-letter" id="answer_1">
                    A
                </span>
                <div class="card-body" id="answer_text_1">
                    Robbie Williams
                </div>
            </div>

            <div id="card2" class="card quiz-answer-card mb-2 hover-bg" onclick="answer('answer_2')">
                <span class="answer-letter" id="answer_2">
                    B
                </span>
                <div class="card-body" id="answer_text_2">
                    Lady Gaga
                </div>
            </div>

            <div id="card3" class="card quiz-answer-card mb-2 hover-bg" onclick="answer('answer_3')">
                <span class="answer-letter" id="answer_3">
                    C
                </span>
                <div class="card-body" id="answer_text_3">
                    Tim Berners
                </div>
            </div>

            <div id="card4" class="card quiz-answer-card mb-2 hover-bg" onclick="answer('answer_4')">
                <span class="answer-letter" id="answer_4">
                    D
                </span>
                <div class="card-body" id="answer_text_4">
                    Justin Bieber
                </div>
            </div>

        </div>  

    </div>

    <div class="btn-container">
    <button onclick="previousQuestion()" id="previous-button" type="button" class="navigation-btn btn-primary" disabled><img src="img/back.png"></button>
    <button onclick="nextQuestion()" id="next-button" type="button" class="navigation-btn btn-primary" disabled><img src="img/next.png"></button>
    </div>

    `;
}

function endScreenHTML() {
    document.getElementById('rightside').innerHTML = ``;
    document.getElementById('rightside').innerHTML = `
    
    <div class="right-screen" id="end-screen">

        <img class="endscreen-logo" src="img/brain result.png">
        <span class="complete-text">
            <p class="p-margin">COMPLETE</p>
            <p class="p-margin">HTML QUIZ</p>
        </span>
        <span class="score-container">
            <span class="your-score">
                YOUR SCORE
            </span>
            <span class="score">
                <p class="score-margin" id="solved-questions">5</p>/<p class="score-margin" id="questions-amount">10</p>
            </span>
        </span>
        <button onclick="joke()" type="button" class="btn share-btn btn-primary">SHARE</button>
        <button onclick="restartGame()" type="button" class="btn replay-btn btn-link">REPLAY</button>

    </div>
    
    `;
}

//----------------JAVA SCRIPT HTML SCHNIPSEL----------------//