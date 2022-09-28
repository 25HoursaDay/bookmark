
if (window.location == "about:blank") {
   fetch("https://raw.githubusercontent.com/25HoursaDay/bookmark/main/site/edu.html")
  .then((result) => { return result.text(); })
  .then((content) => { document.write(content); });
} else { let win001 = window.open("about:blank");
  fetch("https://raw.githubusercontent.com/25HoursaDay/bookmark/main/site/edu.html")
  .then((result) => { return result.text(); })
  .then((content) => { win001.document.write(content); });
}
