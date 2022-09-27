  let win = window.open();
  fetch("https://raw.githubusercontent.com/25HoursaDay/bookmark/main/site/edu.html")
  .then((result) => { return result.text(); })
  .then((content) => { win.document.write(content); });
