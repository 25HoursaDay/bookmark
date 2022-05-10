let style = document.createElement("style");
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
icon.src = "https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico";
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

frame.style.backgroundColor = "black";
title.style.color = "green";
otext.style.color = "green";
btn1.style.color = "green";
btn2.style.color = "green";
btn3.style.color = "green";
btn4.style.color = "green";
undertitle.style.color "green";

btn1.onclick(function btn1() {
alert("btn1");
};
btn2.onclick = function btn2() {
alert("btn2");
};
btn3.onclick = function btn3() {
alert("btn3");
};
btn4.onclick = function btn4() {
alert("btn4");
};

var css1 = document.getElementById("btn1")

style.textContent = `
#main {
  background-color: black;
  width: 800px;
  height: 600px;
  border-radius: 10px;
  animation-name: slidein;
  animation-duration: 2s;
  text-align: center;
  margin: 0px auto;
  position: relative;
}
#title, #undertext {
  color: green;
  font-family: "noto sans mono";
  padding: 10px;
}
#btn1, #btn2, #btn3, #btn4 {
  background-color: grey;
  color: green;
  font-family: "noto sans mono";
  margin: 10px;
  font-size: 20px;
  
}
#btn2:hover,#btn1:hover, #btn3:hover, #btn4:hover {
  background-color: white;
  color: black;
  font-family: "noto sans mono";
  margin: 10px;
  font-size: 20px;
}
#otext {
  color: green;
  font-family: "noto sans mono";
  font-family: 10px;
}
@keyframes slidein {
  0% {
    opacity: 0%
  }
  100% {
    opactiy: 100%
  }
}
`
