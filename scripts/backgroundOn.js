function changeBGColor () {
    let media = document.querySelectorAll(
        "img:first-child, picture:first-child, video:first-child, div[src], svg:first-child"
    )
    media.forEach((content) => {
        content.style.filter = "invert(1) hue-rotate(180deg)"
    })}

document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)"
changeBGColor()

window.addEventListener('scroll', () => {
    changeBGColor()
})