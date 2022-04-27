import throttle from "lodash.throttle";
const data = localStorage.getItem("feedback-form-state")
const array = {
    email: "",
    message: "",
}
const form = document.querySelector(".feedback-form")
const arrayFill = function () {
    array.email = form.elements.email.value;
    array.message = form.elements.message.value;
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
    form[0].value = JSON.parse(data).email;
    form[1].value = JSON.parse(data).message;
}

arrayFill();