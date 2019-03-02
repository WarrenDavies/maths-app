window.onload = init;
function init() {

document.getElementById("new-question").addEventListener("click", loadNewQuestion);

function loadNewQuestion() {

    let firstNumber = Math.floor(Math.random() * 21) - 10;   
    let secondNumber = Math.floor(Math.random() * 21) - 10;
    let sign = Math.round(Math.random()) === 0 ? "+" : "-"; 
    if (sign === "-" && secondNumber < 0) {
        secondNumber = "(" + secondNumber + ")";
    }
    let question = firstNumber + " " + sign + " " + secondNumber;
    document.getElementById("question").innerHTML = question; 
}


} //init