
if (window.location == "about:blank") {
   fetch("https://raw.githubusercontent.com/25HoursaDay/bookmark/main/site/edu.html")
  .then((result) => { return result.text(); })
  .then((content) => { document.write(content); });
} else { location.href = "about:blank";}
