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
frame.id = "main";
document.body.appendChild(frame);
frame.append(title);
frame.append(backbtn);
frame.append(undertitle);
frame.appendChild(otext);
icon.src = "https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico";
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

btn1.style.fontSize = "20px";
btn2.style.fontSize = "20px";
btn3.style.fontSize = "20px";
btn4.style.fontSize = "20px";

btn1.style.margin = "10px";
btn2.style.margin = "10px";
btn3.style.margin = "10px";
btn4.style.margin = "10px";

btn1.style.backgroundColor = "grey";
btn2.style.backgroundColor = "grey";
btn3.style.backgroundColor = "grey";
btn4.style.backgroundColor = "grey";

undertitle.style.color "green";
undertitle.style.padding = "10px";
undertitle.fontSize = "10px";
title.style.fontFamily = "noto sans mono";
title.style.padding = "10px";
otext.style.fontFamily = "noto sans mono";
btn1.style.fontFamily = "noto sans mono";
btn2.style.fontFamily = "noto sans mono";
btn3.style.fontFamily = "noto sans mono";
btn4.style.fontFamily = "noto sans mono";
undertitle.style.fontFamily = "noto sans mono";

frame.style.color = "green";
frame.style.fontFamily = "noto sans mono";
frame.style.height = "600px";
frame.style.width = "800px";
frame.style.borderRadius = "10px";
frame.style.animationName = "slidein";
frame.style.animationDuration = "2s";
frame.style.textAlign = "center";
frame.style.margin = "0px auto";
frame.style.position = "relative";


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
