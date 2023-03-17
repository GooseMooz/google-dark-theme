function changeColorTest(color) {
    chrome.tabs.executeScript({
        code: `document.body.style.backgroundColor = "${color}";`
    }).then(r => console.log(r));
}