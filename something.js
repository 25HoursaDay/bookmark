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
titleA.innerText = "&#60/Hecker.bat/&#62";
main.append(heading);
heading.append(headingA);
headingA.innerText = "A Bookmarklet By: 25HoursaDay.";
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
// extra scripts
function mo(ele, col1, col2, siz) {
  ele.style.color = col1;
  ele.style.fontSize = siz;
  ele.style.borderColor = col2;
};

mo("titleA", "red", "red", "initial");
mo("headingA", "red", "red", "initial");
mo("btn1", "red", "red", "22px");
mo("btn2", "red", "red", "22px");
mo("btn3", "red", "red", "22px");
mo("btn4", "red", "red", "22px");
mo("output", "red", "red", "15px");
