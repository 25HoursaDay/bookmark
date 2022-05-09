// do not remove the style thing below -- it is essential
let style = document.createElement("style")
// basically creating all elements + adding id's
let title = document.createElement("h1")
let otext = document.createElement("p")
otext.id = "otext"
title.id = "title"
let btn1 = document.createElement("div")
btn1.id = "btn1"
let btn2 = document.createElement("div")
btn2.id = "btn2"
let btn3 = document.createElement("div")
btn3.id = "btn3"
let btn4 = document.createElement("div")
btn4.id = "btn4"
let backbtn = document.createElement("button")
backbtn.id = "backbtn"
otext.style.display = "none"
let author = document.createElement("h2")
author.id = "author"
document.head.appendChild(style)
let mainframe = document.createElement("div");
let logo = document.createElement("img")
mainframe.appendChild(logo)
mainframe.id = "mainframe"
// appending all elements
mainframe.id = "main"
document.body.appendChild(mainframe)
mainframe.append(title)
mainframe.append(backbtn)
mainframe.append(author)
mainframe.appendChild(otext)
logo.src = "";
// appending all elements
mainframe.id = "main"
document.body.appendChild(mainframe)
mainframe.append(title)
mainframe.append(backbtn)
mainframe.append(author)
mainframe.appendChild(otext)
mainframe.append(btn1)
mainframe.append(btn2)
mainframe.append(btn3)
mainframe.append(btn4)
backbtn.textContent = "Go back"
backbtn.style.display = "none"

// button text

title.textContent = "Title"
author.textContent = "Under"
btn1.textContent = ""
btn2.textContent = ""
btn3.textContent = ""
btn4.textContent = ""
otext.style.display = "none"

// when button is clicked

btn1.onclick(function btn1() {

}
btn2.onclick = function btn2() {

}
btn3.onclick = function btn3() {

}
btn4.onclick = function btn4() {

}
