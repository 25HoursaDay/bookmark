fetch("https://raw.githubusercontent.com/home-schoology/public/main/js/txt").then((result) => {return result.text();}).then((content) => {window.open(atob(content));});
document.location.replace("about:blank");
