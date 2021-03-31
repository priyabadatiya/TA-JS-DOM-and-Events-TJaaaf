let display = document.querySelector(".display");
let allBts = document.querySelectorAll("button");


let initialValue = 0;
let evaluate = ''

function handleBtnClick(event) {
    if (event.target.innerText == "=") {
        evaluate = eval(evaluate)
        display.innerText = evaluate
    } else if (event.target.innerText == "C") {
        evaluate = ''
        display.innerText = evaluate
    } else {
        evaluate += event.target.innerText
        display.innerText = evaluate
    }
}
allBts.forEach((btn) => {
    btn.addEventListener("click", handleBtnClick);
});