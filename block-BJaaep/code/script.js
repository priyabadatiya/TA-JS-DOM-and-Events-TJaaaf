let firstbox = document.querySelectorAll(".first li");
let secondbox = document.querySelector(".second");

firstbox.forEach((box, index) =>
    box.addEventListener("click", (event) => {
        event.target.innerText = index + 1
        let randomNumber = Math.floor(Math.random() * 12);
        event.target.innerText = randomNumber;
        setTimeout(() => {
            event.target.innerText = "";
        }, 5000);
    })
);

secondbox.addEventListener("click", (event) => {
    let text = event.target.dataset.text;
    event.target.innerText = text;
    setTimeout(() => {
        event.target.innerText = "";
    }, 5000);
});