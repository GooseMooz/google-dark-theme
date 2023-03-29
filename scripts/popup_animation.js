const checkbox = document.querySelector("input[type=checkbox]")
const body = document.querySelector("body")

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        body.classList.add('dark-mode');
        chrome.scripting.executeScript({
            target: {tabId: tab.id, allFrames: true},
            files: ['scripts/background.js']
        }).then(r => console.log(r));
    }
    else {
        body.classList.remove('dark-mode');
    }
});