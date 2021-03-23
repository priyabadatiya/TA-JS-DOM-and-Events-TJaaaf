let boxOne = document.querySelector(".first");
let boxTwo = document.querySelector(".second");

function getRandomColor() {
    return '#' + (Math.random() * 9999999 + '').slice(0, 6)
}

function onClick() {
    console.log('hi')
    let randomColor = getRandomColor();
    boxOne.style.backgroundColor = randomColor;
}

function mouseMove() {
    let randomColor = getRandomColor();
    boxTwo.style.backgroundColor = randomColor;
}
boxOne.addEventListener("click", onClick);
boxTwo.addEventListener("mousemove", mouseMove);