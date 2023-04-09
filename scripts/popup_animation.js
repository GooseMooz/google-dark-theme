const checkbox = document.querySelector("input[type=checkbox]")
const body = document.querySelector("body")

// Maybe I'll use this method in future
//
// function changeBGColor () {
//     let nodes = document.body.getElementsByTagName("*")
//     document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)"
//     let media = document.querySelectorAll(
//         "img:first-child, picture:first-child, video:first-child, div[src], svg:first-child"
//     )
//     media.forEach((content) => {
//         content.style.filter = "invert(1) hue-rotate(180deg)"
//     })
    // for (let i = 0; i < nodes.length; i++) {
    //     // console.log([nodes[i]])
    //     // console.log(document.defaultView.getComputedStyle(nodes[i], null).color)
    //     // console.log('or')
    //     // console.log(document.defaultView.getComputedStyle(nodes[i], null).backgroundColor)
    //     // console.log('and')
    //     // console.log(document.defaultView.getComputedStyle(nodes[i], null))
    //     // console.log("==================")
    //     const color = document.defaultView.getComputedStyle(nodes[i], null).color
    //     if (/^rgb\(\s*\d+,\s*\d+,\s*\d+\)$/gm.test(color) || /^rgba\(\s*\d+,\s*\d+,\s*\d+\S+\s*\S+$/gm.test(color)) {
    //         let r = parseInt(color.match(/\d+/g)[0]);
    //         let g = parseInt(color.match(/\d+/g)[1]);
    //         let b = parseInt(color.match(/\d+/g)[2]);
    //
    //         r = 255 - r
    //         g = 255 - g
    //         b = 255 - b
    //
    //         let new_col = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    //         console.log(new_col)
    //         nodes[i].style.transition = "background-color 0.4s ease"
    //         nodes[i].style.setProperty('background', new_col, 'important')
    //     }
    //     else {
    //         document.body.style.backgroundColor = "#FFFFFF"
    //     }
    // }
// }

checkbox.addEventListener('change', async function () {
    if (checkbox.checked) {
        body.classList.add('dark-mode');
        let queryOptions = {active: true, lastFocusedWindow: true};
        let [tab] = await chrome.tabs.query(queryOptions);
        console.log(tab)
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