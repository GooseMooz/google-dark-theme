const checkbox = document.querySelector("input[type=checkbox]")
const body = document.querySelector("body")
function changeBGColor (color) {
    //const old_col = document.body
    document.body.style.backgroundColor = color
}

// checkbox.addEventListener('change', async function () {
//     if (checkbox.checked) {
//         body.classList.add('dark-mode');
//         let queryOptions = {active: true, lastFocusedWindow: true};
//         let [tab] = await chrome.tabs.query(queryOptions);
//         chrome.scripting.executeScript({
//             target: {tabId: tab.id},
//             files: ['scripts/background.js'],
//             args: {black: true}
//         }).then(r => console.log(r));
//     } else {
//
//         body.classList.remove('dark-mode');
//     }
// });

checkbox.addEventListener('change', async function () {
    if (checkbox.checked) {
        body.classList.add('dark-mode');
        let queryOptions = {active: true, lastFocusedWindow: true};
        let [tab] = await chrome.tabs.query(queryOptions);
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: changeBGColor,
            args: ["#2B1C2F"]
        }).then(r => console.log(r));
    } else {
        body.classList.remove('dark-mode');
        let queryOptions = {active: true, lastFocusedWindow: true};
        let [tab] = await chrome.tabs.query(queryOptions);
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: changeBGColor,
            args: ["#AF9B91"]
        }).then(r => console.log(r));
    }
});