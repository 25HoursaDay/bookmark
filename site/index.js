/*Button Code*/
function btn(lnk) { let win = window.open();
fetch("https://raw.githubusercontent.com/25HoursaDay/bookmark/main/"+lnk)
	.then((result) => { return result.text(); })
	.then((content) => { win.document.write(content); });
}

function btn(num, lnk) {
if (num == 0) {
	fetch("https://raw.githubusercontent.com/25HoursaDay/bookmark/main/"+lnk)
	.then((result) => { return result.text(); })
	.then((content) => { window.append(content); });
	      }
}
/*End of Button Code */

/*Security Measures*/
document.oncontextmenu = rightClick;
function rightClick(clickEvent) {clickEvent.preventDefault();}  
