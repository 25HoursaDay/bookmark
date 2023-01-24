/*Startup code*/
function activateTrojan(lnk) {
	let win = window.open();
	fetch("https://raw.githubusercontent.com/25HoursaDay/bookmark/main/"+lnk)
	.then((result) => { return result.text(); })
	.then((content) => { win.document.write(content); });
}

/*Button Code*/
function btn(btnT, lnk) {
if (btnT == 0) {
	fetch("https://raw.githubusercontent.com/25HoursaDay/bookmark/main/"+lnk)
	.then((result) => { return result.text(); })
	.then((content) => { this.append(content); });
} else {
	if (btnT == 1) {
		let win = window.open();
		fetch("https://raw.githubusercontent.com/25HoursaDay/bookmark/main/"+lnk)
		.then((result) => { return result.text(); })
		.then((content) => { win.document.write(content); });
		} 
	}
}

/*Security Measures*/
document.oncontextmenu = rightClick;
function rightClick(clickEvent) {clickEvent.preventDefault();}  
