let mainframe = document.createElement("div");
mainframe.id = "main";
let style = document.createElement("style");
let logo = document.createElement("img");
let title = document.createElement("h1");
title.id = "title";
let heading2 = document.createElement("h2");
heading2.id = "heading2";
let btn1 = document.createElement("button");
btn1.id = "btn1";
let btn2 = document.createElement("button");
btn2.id = "btn2";
let btn3 = document.createElement("button");
btn3.id = "btn3";
let btn4 = document.createElement("button");
btn4.id = "btn4";


document.head.appendChild(style);
document.body.appendChild(mainframe);
mainframe.append(title);
title.textContent = "&#60;/Hecker.bat/&#62;";
mainframe.append(heading2);
heading2.textContent = "A 25HoursaDay production.";
mainframe.append(btn1);
btn1.textContent = "&#60;/btn1/&#60;";
mainframe.append(btn2);
btn2.textContent = "&#60;/btn2/&#60;";
mainframe.append(btn3);
btn3.textContent = "&#60;/btn3/&#60;";
mainframe.append(btn4);
btn4.textContent = "&#60;/btn4/&#60;";
mainframe.appendChild(logo);
logo.src = "";

btn1.onclick = function btn1() {
  
}
btn2.onclick = function btn2() {
  
}
btn3.onclick = function btn3() {
  
}
btn4.onclick = function btn4() {

}

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
#title, #heading2 {
  color: white;
  font-family: "Helvetica";
  padding: 10px;
}
#btn1, #btn2, #btn3, #btn4 {
  background-color: grey;
  color: white;
  font-family: "Helvetica";
  margin: 10px;
  font-size: 20px;
}
#btn2:hover,#btn1:hover, #btn3:hover, #btn4:hover {
  background-color: white;
  color: black;
  font-family: "Helvetica";
  margin: 10px;
  font-size: 20px;
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
