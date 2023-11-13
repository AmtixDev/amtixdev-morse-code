<div align="center">
    <br />
    <p>
        <a href="https://amtixdev.xyz"><img src="https://cdn.discordapp.com/attachments/1141443355532873879/1173692642551402608/mybanner-o-x_1.png?ex=6564e174&is=65526c74&hm=4939339c5671e01c6cdd068fb581b1fe88bd9b1c8fe56142caa4f51953cc7237&" width="546" alt="discord-morse-code" /></a>
    </p>
    <p>
    <a href="https://discord.gg/amtix-1k-1097821881245126768"><img src="https://img.shields.io/discord/1097821881245126768?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/discord-morse-code"><img src="https://img.shields.io/npm/v/discord-morse-code?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/discord-morse-code"><img src="https://img.shields.io/npm/dt/discord-morse-code?maxAge=3600" alt="NPM downloads" /></a>
    </p>
  <p>
        <a href="https://amtixdev.xyz"><img src="https://media.discordapp.net/attachments/1132015920815014082/1133285475164094605/Powered_By_AmtiXDev_With_Color.png?width=159&height=33" alt="AmtiXDev" /></a>
    </p>

</div>


# Examples/How Package discord-morse-code Work?

## How To Install Package?

```js
npm install discord-morse-code
```

## How To Use Package

```js
const { textToMorse, morseToText } = require('discord-morse-code');

client.on('messageCreate', (message) => {
  if (message.author.bot) return; // Ignore messages from other bots

  const args = message.content.split(' ');
  const command = args[0].toLowerCase();

  if (command === '!morse') {
    // Convert text to Morse code
    const text = args.slice(1).join(' ');
    const morse = textToMorse(text);
    message.channel.send(`Morse code: ${morse}`);
  }

  if (command === '!decode') {
    // Decode Morse code to text
    const morse = args.slice(1).join(' ');
    const text = morseToText(morse);
    message.channel.send(`Decoded message: ${text}`);
  }
});
```

# By [AmtiXDev](https://www.youtube.com/@xUnDarkArTz)

![Image](https://user-images.githubusercontent.com/107303548/248915710-9dd3b4cf-5eb0-4e44-b5bd-20306947a715.png)

If You Need Help About How The Npm Package Work? Contant Me [HERE](https://discord.gg/amtix-1k-1097821881245126768)

### CopyRight ©
All rights reserved to [AmtiXDev](https://amtixdev.xyz)
