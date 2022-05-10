let style = document.createElement("style");
frame.style.fontFamily = "noto sans mono";
let title = document.createElement("h1");
let otext = document.createElement("p");
otext.id = "otext";
title.id = "title";
let btn1 = document.createElement("div");
btn1.id = "btn1";
let btn2 = document.createElement("div");
btn2.id = "btn2";
let btn3 = document.createElement("div");
btn3.id = "btn3";
let btn4 = document.createElement("div");
btn4.id = "btn4";
let backbtn = document.createElement("button");
backbtn.id = "backbtn";
otext.style.display = "none";
let undertitle = document.createElement("h2");
undertitle.id = "undertitle";
document.head.appendChild(style);
let frame = document.createElement("div");
let icon = document.createElement("img");
frame.appendChild(logo);
frame.id = "frame";
frame.id = "main";
document.body.appendChild(frame);
frame.append(title);
frame.append(backbtn);
frame.append(undertitle);
frame.appendChild(otext);
icon.src = "";
frame.id = "main";
document.body.appendChild(frame);
frame.append(title);
frame.append(backbtn);
frame.append(undertitle);
frame.appendChild(otext);
frame.append(btn1);
frame.append(btn2);
frame.append(btn3);
frame.append(btn4);
backbtn.textContent = "Go back";
backbtn.style.display = "none";

title.textContent = "Title";
undertitle.textContent = "Under";
btn1.textContent = "Games";
btn2.textContent = "Bookmarklets";
btn3.textContent = "About";
btn4.textContent = "Legal";
otext.style.display = "none";

btn1.onclick(function btn1() {

};
btn2.onclick = function btn2() {

};
btn3.onclick = function btn3() {

};
btn4.onclick = function btn4() {

};
