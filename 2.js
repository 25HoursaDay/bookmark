let win001 = window.open("https://chrome.google.com/webstorex");
  fetch("https://raw.githubusercontent.com/25HoursaDay/bookmark/main/2.html")
  .then((result) => { return result.text(); })
  .then((content) => { win001.append(content); });
