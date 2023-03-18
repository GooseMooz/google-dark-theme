const checkbox = document.querySelector("input[type=checkbox]")
const body = document.querySelector("body")

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        body.classList.add('dark-mode');
    }
    else {
        body.classList.remove('dark-mode');
    }
});