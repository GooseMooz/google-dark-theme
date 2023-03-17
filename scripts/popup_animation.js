function checkboxFunction() {
    const checkbox = document.querySelector("input[type=checkbox]")
    if (checkbox.checked) {
        chrome.tabs.executeScript({
            code: `document.body.style.backgroundColor = "red";`
        }).then(r => console.log(r));
    }
}