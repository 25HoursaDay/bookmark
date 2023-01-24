/*Button Code*/
function btn(lnk) { let win = window.open();
fetch("https://raw.githubusercontent.com/25HoursaDay/bookmark/main/site/gam/"+lnk)
	.then((result) => { return result.text(); })
	.then((content) => { win.document.write(content); });
}

/*Security Measures*/
document.oncontextmenu = rightClick;
function rightClick(clickEvent) {clickEvent.preventDefault();}  
