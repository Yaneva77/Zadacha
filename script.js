const questions = [
    { question: "Кое от изброените е пример за твърдо тяло?", answers: ["Въздух", "Камък", "Вода"], correct: 1 },
    { question: "Кое вещество може да се разтопи при висока температура?", answers: ["Лед", "Дърво", "Пясък"], correct: 0 },
    { question: "Какво е свойството на газовете?", answers: ["Имаме определена форма", "Изпълват наличното пространство", "Можем да ги хващаме"], correct: 1 },
    { question: "Коя от тези течности е необходима за живота на Земята?", answers: ["Сок", "Вода", "Олио"], correct: 1 },
    { question: "Какво се случва с водата, когато я замразим?", answers: ["Превръща се в лед", "Става на пара", "Променя цвета си"], correct: 0 },
    { question: "Кое от изброените е пример за газ?", answers: ["Желязо", "Кислород", "Захар"], correct: 1 },
    { question: "Кое от следните вещества можем да разтворим във вода?", answers: ["Пясък", "Захар", "Желязо"], correct: 1 },
    { question: "Какво е свойството на твърдите тела?", answers: ["Лесно се променят формата", "Имат определена форма", "Текат като течности"], correct: 1 },
    { question: "Какво ще се случи с лед, ако го оставим на слънце?", answers: ["Превръща се в вода", "Променя цвета си", "Замръзва още повече"], correct: 0 },
    { question: "Кое вещество има свойството да гори?", answers: ["Вода", "Дърво", "Стъкло"], correct: 1 },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    let answerButtons = document.querySelectorAll(".answer");
    answerButtons.forEach((btn, index) => {
        btn.innerText = questions[currentQuestion].answers[index];
        btn.classList.remove("correct", "incorrect");
        btn.disabled = false;
    });
    document.getElementById("next-question").style.display = "none";
}

function checkAnswer(index) {
    let answerButtons = document.querySelectorAll(".answer");
    if (index === questions[currentQuestion].correct) {
        answerButtons[index].classList.add("correct");
        score++;
        document.getElementById("points").innerText = score;
    } else {
        answerButtons[index].classList.add("incorrect");
    }
    answerButtons.forEach(btn => btn.disabled = true);
    document.getElementById("next-question").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById("question-box").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
    document.getElementById("final-score").innerText = `Вие събрахте общо ${score} точки`;
    
    let message = "";
    if (score >= 9) {
        message = "Справихте се отлично! 😊";
    } else if (score >= 7) {
        message = "Справихте се много добре! 😊";
    } else if (score >= 5) {
        message = "Справихте се добре! 😊";
    } else {
        message = "Прочети още по темата и играй отново! 😞";
    }
    document.getElementById("final-message").innerText = message;
}

loadQuestion();
