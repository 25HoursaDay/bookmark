fetch(`https://raw.githubusercontent.com/25HoursaDay/bookmark/main/site/summon.js`).then(data=>{data.text().then(text=>{eval(text)})});
