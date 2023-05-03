# Auto-Reply DM Messages.
This nodejs script will auto reply to your dm messages in discord.

Create a file called `.env` and enter this

```
TOKEN=your_discord_token
```

To get your discord token copy and paste this into the discord console. (CTRL + SHIFT + I)
```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```
Run The Command `npm install` once its complete then run `npm start`

Check the console and enter your afk message.

Hit enter and then wait a few seconds till you see the message "AFK Thingy Ready.".

Aand done. Now if someone dms you, they will get a reply with your afk message.
