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



let rightAnswers = 0;
let currentQuestion = 0;

let AUDIO_SUCCESS = new Audio('sounds/right.mp3');
let AUDIO_FAIL = new Audio('sounds/wrong.mp3');



function init() {

    document.getElementById('question_amount').innerHTML = questions.length;
    showQuestion();

}



function showQuestion() {

    if (gameIsOver()) {
        showEndscreen();
    }
    else {
        updateToNextQuestion();
        updateProgressBar();
    }

}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndscreen() {
    document.getElementById('end-screen').style = ``;
    document.getElementById('question-body').style = `display: none;`;
    document.getElementById('solved-questions').innerHTML = rightAnswers;
    document.getElementById('questions-amount').innerHTML = questions.length;
}

function updateProgressBar() {
    let percent = Math.round((currentQuestion / questions.length) * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function updateToNextQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('current-question').innerHTML = `${currentQuestion + 1}`;
}



function answer(selection) {

    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        AUDIO_SUCCESS.play();
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightAnswers++;
    }
    else {
        AUDIO_FAIL.play();
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;

    //        ***Meine Lösung***

    // let correct = questions[currentQuestion];

    //  if (answer_x == `answer_${correct['right_answer']}`) {
    //     console.log('richtig');
    //  }
    //  else {
    //     console.log('falsch');
    //  }

    //        ***Meine Lösung***

}



function nextQuestion() {

    currentQuestion++;
    resetQuestion();
    showQuestion();

}


function resetQuestion() {

    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success');
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger');
    }

    document.getElementById('next-button').disabled = true;

}


function restartGame() {

    rightAnswers = 0;
    currentQuestion = 0;

    document.getElementById('end-screen').style = `display: none;`;
    document.getElementById('question-body').style = ``;

    init();

}