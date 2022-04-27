import throttle from "lodash.throttle";
const data = localStorage.getItem("feedback-form-state")
const array = {
    email: "",
    message: "",
}
const form = document.querySelector(".feedback-form")
const arrayFill = function () {
    const {email, message} = form.elements
    array.email = email.value;
    array.message = message.value;
}
form.addEventListener('input', throttle(() => {
    arrayFill();
    localStorage.setItem("feedback-form-state", JSON.stringify(array))
}, 500))
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    form.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(array)
})
if (data) {
    const {email, message} = JSON.parse(data)
    form[0].value = email;
    form[1].value = message;
}

arrayFill();