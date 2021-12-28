const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

function validateForm() {
    var password = document.forms["myForm"]["pass"];
    var email = document.forms["myForm"]["femail"];

    if (femail.length < 5) {
        window.alert(
            "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (pass > 4) {
        window.alert("Wrong");
        password.focus();
        return false;
    }
    return true;

}