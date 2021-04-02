let form = document.querySelector("form");

let usernameError = "";
let nameError = "";
let emailError = "";
let phoneError = "";
let passwordError = "";

function includeNumbers(str) {
    return str.split("").some(ele => Number(ele));
}

function containsAtherate(str) {
    return !str.includes("@");
}

function isAllNumbers(str) {
    str.split("").every(ele => Number(ele));
}

function handleSubmit(event) {
    console.log(event);
    event.preventDefault();

    let usernameEle = event.target.elements.username;
    let nameEle = event.target.elements.name;
    let emailEle = event.target.elements.email;
    let phoneEle = event.target.elements.phoneNumber;
    let passwordEle = event.target.elements.password;
    let ConfirmPasswordEle = event.target.elements.confirmPassword;

    if (usernameEle.value.length <= 4) {
        usernameError = "Can't be less than 4 character";
        console.log(usernameEle)
        usernameEle.innerText = usernameError;

    } else if (includeNumbers(nameEle.value)) {
        console.log(nameEle.value);
        nameError = "You can't use number in the name field";
        nameEle.nextElementSibling.innerText = nameError;
    } else if (containsAtherate(emailEle.value)) {
        emailError = "Not a valid email";
        emailEle.nextElementSibling.innerText = emailError;
    } else if (isAllNumbers(phoneEle.value)) {
        phoneError = "Phone number can only contain numbers";
        phoneEle.nextElementSibling.innerText = phoneError;
    } else if (passwordEle.value !== ConfirmPasswordEle.value) {
        passwordError = "Password and confirm password must be same";
        ConfirmPasswordEle.innerText = passwordError;
    } else {
        displaySuccess("password")
        displaySuccess("password-check");
    }
    alert("User added sucessfully");
}
form.addEventListener("submit", handleSubmit);