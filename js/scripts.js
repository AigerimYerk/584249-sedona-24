var btn = document.querySelector(".button-search-hotel");
var form = document.querySelector(".search-form");
var ar_date = form.querySelector("[name=arrival-date]");
var dep_date = form.querySelector("[name=departure-date]");
btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("search-form-open");
    ar_date.focus();
});
form.addEventListener("submit", function (evt) {
    if (!ar_date.value || !dep_date.value) {
        evt.preventDefault();
        console.log("Нужно ввести даты заезда и выезда");
        }
});