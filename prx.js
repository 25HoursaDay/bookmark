fetch("https://raw.githubusercontent.com/").then((result) => {return result.text();}).then((content) => {const prxL = btoa(content);});
let prxW = window.open();
prxW.document.write(`<script>window.opener.location.replace('data%3Atext%2Fhtml%2C%3Cscript%3Ewindow.close%28%29%3B%3C%2Fscript%3E');window.location.replace(`+atob(prxL)+`);</script>`);
