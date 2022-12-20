fetch("https://raw.githubusercontent.com/").then((result) => {return result.text();}).then((content) => {let prxL = btoa(content);});
let prxW = window.open();
prxW.document.write();
