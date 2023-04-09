function resetBGColor () {
    let media = document.querySelectorAll(
        "img:first-child, picture:first-child, video:first-child, div[src], svg:first-child"
    )
    media.forEach((content) => {
        content.style.filter = ""
    })}

document.querySelector("html").style.filter = ""
resetBGColor()
console.log('boba')

window.addEventListener('scroll', () => {
    resetBGColor()
})