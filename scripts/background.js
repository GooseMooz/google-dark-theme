const body = document.querySelector("body")

const prev_body = body

if (args.black) {
    body.style.backgroundColor = "#2B1C2F"
}
else {
    body.style.background = prev_body.style.backgroundColor
}
