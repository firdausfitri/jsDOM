console.log(document.title)

document.title = "Learn DOM yeah!" //change html title in js

const body = document.body

body.append("Hello world") //untuk tulis Hello world dalam body html

const h1 = document.createElement('h1') //create element H1 
h1.innerText = "<marquee>Test H1</marquee>" //selain innerText, boleh guna innerHTML & textContent

const myName = document.createElement('p')
myName.innerHTML = "<marquee>Firdaus Fitri</marquee>" //hanya marquee di innerHTML shj berfungsi

const yourName = document.createElement('b')
yourName.textContent = "<marquee>Izzati M</marquee>"

body.append(h1)
body.append(myName)
body.append(yourName)

//playing with ID and button

const btn1 = document.getElementById('btn-1')
const btn2 = document.querySelector('.btn-2') // # for id . for class

btn1.style.border = "none" //mixed a bit with css
btn1.style.padding = "8px"
btn1.style.fontSize = "24px"
btn1.style.background = "tomato"


//connect function from onclick in HTML

const defaultText = "Click Me 1"
btn1.textContent = defaultText

function replaceClr() {
    btn1.style.background = "aqua"
}

function changeText() {
    btn1.textContent = "PLSSSSS"
}

function oriText() {
    btn1.textContent = defaultText
}
