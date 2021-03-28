let texts = ["A beautiful Place  ","A Place with a lot of tradition  ", "A Place with old cities  "]
let count = 0
let index = 0
let fullText = ""
let currentText = ""


type = () =>{
    if (count === texts.length) {
        count=0
    }
    fullText = texts[count]
    currentText = fullText.slice(0,++index)
    document.querySelector(".typing").textContent = currentText
    if (currentText.length === fullText.length) {
        count++
        index=0
    }
    setTimeout(type, 200)
}
type()
