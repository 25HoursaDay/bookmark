// creating elements 
let main = document.createElement("div");
let style = document.createElement("style");
let exit = document.createElement("button");
let logo = document.createElement("image");
let title = document.createElement("h1");
let titleA = document.createElement("a");
let heading = document.createElement("h2");
let headingA = document.createElement("a");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let btn4 = document.createElement("button");
let output = document.createElement("p");
let scripting = document.createElement("script");
//appending crap
document.head.appendChild(main);
main.append(exit);
main.append(logo);
main.append(title);
title.append(titleA);
main.append(heading);
heading.append(headingA);
main.append(btn1);
main.append(btn2);
main.append(btn3);
main.append(btn4);
main.append(output);
// setting css
main.style.fontFamily  = "noto sans mono";
main.style.textAlign  = "center";
main.style.border  = "6px green solid";
main.style.backgroundColor  = "black";
main.style.width  = "500px";
main.style.height  = "auto";
main.style.borderRadius  = "50px";
main.style.animationName  = "slidein";
main.style.animationDuration  = "2s";
main.style.margin  = "auto";
main.style.position = "relative";
main.style.marginTop  = "20px";
main.style.paddingBottom  = "20px";
main.style.marginBottom  = "30px";
title.style.color = "green";
heading.style.color = "green";
// misc scripts
titleA.innerText = "&#60/Hecker.bat/&#62";
headingA.innerText = "A Bookmarklet By: 25HoursaDay.";
function mo(e, c1, c2, s1) {
  e.onmouseover = function(){
  e.style.color = c1;
  e.style.fontSize = s1;
  e.style.borderColor = c2;
  };
};

function se(e, o) {
  e.id = e;
  e.class = e;
  e.onclick = o;
};

mo("titleA", "red", "red", "initial");
mo("headingA", "red", "red", "initial");
mo("btn1", "red", "red", "22px");
mo("btn2", "red", "red", "22px");
mo("btn3", "red", "red", "22px");
mo("btn4", "red", "red", "22px");
mo("output", "red", "red", "15px");
mo("exit", "red", "red", "initial");
se("btn1", "btn1()");
se("btn2", "btn2()");
se("btn3", "btn3()");
se("btn4", "btn4()");
se("exit", "exit()");
se("logo", "logo()");
btn1.style.color = "green";
btn1.style.backgroundColor = "#000000";
btn1.style.fontSize = "20px";
btn1.style.borderRadius = "51122px";
btn1.style.border = "green solid";
btn1.style.margin = "10px 10px";
btn1.style.position = "relative";
btn1.style.objectPosition = "center 10%"; // x y
btn1.style.width = "inherit"; // 450px
btn1.style.height = "40px";
btn2.style.color = "green";
btn2.style.backgroundColor = "#000000";
btn2.style.fontSize = "20px";
btn2.style.borderRadius = "51122px";
btn2.style.border = "green solid";
btn2.style.margin = "10px 10px";
btn2.style.position = "relative";
btn2.style.objectPosition = "center 20%"; // x y
btn2.style.width = "inherit"; // 450px
btn2.style.height = "40px";
btn3.style.color = "green";
btn3.style.backgroundColor = "#000000";
btn3.style.fontSize = "20px";
btn3.style.borderRadius = "51122px";
btn3.style.border = "green solid";
btn3.style.margin = "10px 10px";
btn3.style.position = "relative";
btn3.style.objectPosition = "center 30%"; // x y
btn3.style.width = "inherit"; // 450px
btn3.style.height = "40px";
btn4.style.color = "green";
btn4.style.backgroundColor = "#000000";
btn4.style.fontSize = "20px";
btn4.style.borderRadius = "51122px";
btn4.style.border = "green solid";
btn4.style.margin = "10px 10px";
btn4.style.position = "relative";
btn4.style.objectPosition = "center 40%"; // x y
btn4.style.width = "inherit"; // 450px
btn4.style.height = "40px";

exit.style.fontSize = "20px";
exit.style.backgroundColor = "black";
exit.style.marginRight = "100%";
exit.style.marginTop = "0%";
exit.style.position = "relative";
exit.style.color = "green";
exit.style.border = "green solid";
exit.style.borderRadius = "86587px";

output.style.color = "green";
output.style.fontSize = "10px"

output.style.display = "none";
  
main.style.alignItems = "center";

function exit() {
main.innerHTML = "";
};
  
function btn1() {
alert("btn1");
};
  
function btn2() {
alert("btn2");
};
  
function btn3() {
alert("btn3");
};
  
function btn4() {
alert("btn4");
};
