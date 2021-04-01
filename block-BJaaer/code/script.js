let form = document.querySelector("form");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
let displayName = document.querySelector(".display-name");
let displayEmail = document.querySelector(".display-email");
let displaylove = document.querySelector(".display-love");
let displayColor = document.querySelector(".display-color");
let displayRating = document.querySelector(".display-rating");
let displayGenre = document.querySelector(".display-genre");
let displayTerms = document.querySelector(".display-terms");

let userInfo = {};

function handleInput(event) {
    event.preventDefault();
    userInfo.name = event.target.text.value;
    displayName.innerText = userInfo.name;

    userInfo.email = event.target.email.value;
    displayEmail.innerText = userInfo.email;

    userInfo.love = event.target.gender.value;
    displaylove.innerText = userInfo.love;

    userInfo.color = event.target.color.value;
    displayColor.innerText = userInfo.color;

    userInfo.rating = event.target.range.value;
    displayRating.innerText = userInfo.rating;

    userInfo.genre = event.target.drone.value;
    displayGenre.innerText = userInfo.genre;

    userInfo.terms = event.target.terms.value;
    if (userInfo.terms === "on") {
        displayTerms.innerText = "You agree to Terms and Conditions";
    } else {
        displayTerms.innerText = "";
    }
    form.style.display = "none";
    modal.style.display = "flex";
}
console.log(userInfo);
form.addEventListener("submit", handleInput);

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    form.style.display = "block";
});