const checkbox = document.querySelector("input[type=checkbox]")
const body = document.querySelector("body")

// checkbox.addEventListener('change', async function () {
//     await chrome.storage.local.set({ state: checkbox.checked }).then(() => {
//         console.log("Value is set to " + checkbox.checked);
//     });
// });
//
// chrome.storage.local.get(['state'], function(result) {
//     document.getElementById('checkbox').checked = result.state;
//     console.log("Value currently is: " + result.state)
// });

checkbox.addEventListener('change', async function () {
    if (checkbox.checked) {
        body.classList.add('dark-mode');
        let queryOptions = {active: true, lastFocusedWindow: true};
        let [tab] = await chrome.tabs.query(queryOptions);
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: [ "scripts/backgroundOn.js" ],
        }).then(r => console.log('Black' + r));
    } else {
        body.classList.remove('dark-mode');
        let queryOptions = {active: true, lastFocusedWindow: true};
        let [tab] = await chrome.tabs.query(queryOptions);
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: [ "scripts/backgroundOff.js" ],
        }).then(r => console.log('White' + r));
    }
});