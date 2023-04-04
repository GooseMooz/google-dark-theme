const checkbox = document.querySelector("input[type=checkbox]")
const body = document.querySelector("body")

function changeBGColor () {
    let nodes = document.body.getElementsByTagName("*")
    for (let i = 0; i < nodes.length; i++) {
        console.log([nodes[i]])
        console.log(document.defaultView.getComputedStyle(nodes[i], null).backgroundColor)
        console.log("==================")
        const color = document.defaultView.getComputedStyle(nodes[i], null).backgroundColor
        if (/^rgb\(\s*\d+,\s*\d+,\s*\d+\)$/gm.test(color) || /^rgba\(\s*\d+,\s*\d+,\s*\d+\S+\s*\S+$/gm.test(color)) {
            console.log("NE JOPA")
            console.log(color.match(/\d+/g))
            let r = parseInt(color.match(/\d+/g)[0]);
            let g = parseInt(color.match(/\d+/g)[1]);
            let b = parseInt(color.match(/\d+/g)[2]);

            r = 255 - r
            g = 255 - g
            b = 255 - b

            let new_col = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
            nodes[i].style.transition = "background-color 0.4s ease"
            nodes[i].style.setProperty('background', new_col, 'important')
        }
        else {
            console.log('JOPA')
            document.body.style.backgroundColor = "#FFFFFF"
        }
    }
}

checkbox.addEventListener('change', async function () {
    if (checkbox.checked) {
        body.classList.add('dark-mode');
        let queryOptions = {active: true, lastFocusedWindow: true};
        let [tab] = await chrome.tabs.query(queryOptions);
        console.log(tab)
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: changeBGColor
        }).then(r => console.log('Black' + r));
    } else {
        body.classList.remove('dark-mode');
        let queryOptions = {active: true, lastFocusedWindow: true};
        let [tab] = await chrome.tabs.query(queryOptions);
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: changeBGColor
        }).then(r => console.log('White' + r));
    }
});