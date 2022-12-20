fetch("https://raw.githubusercontent.com/").then((result) => {return result.text();}).then((content) => {let prxL = content;});
btoa(prxL);
let prxW = window.open();
prxW.document.write();
