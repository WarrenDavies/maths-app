window.onload = init;
function init() {
let question;
document.getElementById("main-button").addEventListener("click", handleClick);

function handleClick() {
    if (document.getElementById("main-button").innerHTML === "New Question") {
        question = getNewQuestion();
    } else if (document.getElementById("main-button").innerHTML === "Get Answer") {
        getAnswer(question);
    }
}


function getNewQuestion() {
    let firstNumber = Math.floor(Math.random() * 21) - 10;
    let secondNumber = Math.floor(Math.random() * 21) - 10;
    let signRandomiser = Math.floor(Math.random() * 4) ;
    let sign;
    switch (signRandomiser) {
        case 0:
            sign = "+";
            break;
        case 1:
            sign = "-";
            break;
        case 2:
            sign = "*";
            break;
        case 3:
            sign = "/";
            break;
    }
    if (sign === "-" && secondNumber < 0) {
        secondNumberText = "(" + secondNumberText + ")";
    } else {
        secondNumberText = secondNumber;
    }
    let questionText = firstNumber + " " + sign + " " + secondNumber;
    document.getElementById("display-area").innerHTML = questionText; 
    document.getElementById("main-button").innerHTML = "Get Answer";
    return {
        firstNumber: firstNumber,
        secondNumber: secondNumber,
        sign: sign
    }
}

function getAnswer(question) {
    let answer;
    switch (question.sign) {
        case "+":
            answer = question.firstNumber + question.secondNumber;
            break;
        case "-":
            answer = question.firstNumber - question.secondNumber;
            break;
        case "*":
            answer = question.firstNumber * question.secondNumber;
            break;
        case "/":
            answer = question.firstNumber / question.secondNumber;
            break;
    }
    console.log(answer);
    document.getElementById("display-area").innerHTML = answer;
    document.getElementById("main-button").innerHTML = "New Question";
}

} //init