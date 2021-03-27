let box1 = document.querySelectorAll(".boxes li");
let box2 = document.querySelector(".boxes_2");

box1.forEach(ele =>
    ele.addEventListener("click", function(event) {
        event.target.style.transform = "rotateY(0deg)";
        let randomNumber = Math.floor(Math.random() * 12);
        event.target.innerText = randomNumber;
        setTimeout(() => {
            event.target.style.transform = "rotateY(180deg)";
            event.target.innerText = "";
        }, 5000);
    })
);

box2.addEventListener("click", function(event) {
    let text = event.target.dataset.text;
    event.target.innerText = text;
    event.target.style.transform = "rotateY(0deg)";
    setTimeout(() => {
        event.target.style.transform = "rotateY(180deg)";
        event.target.innerText = "";
    }, 5000);
});