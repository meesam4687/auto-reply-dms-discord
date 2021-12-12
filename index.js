const Discord = require("discord.js-selfbot");
const client = new Discord.Client();
const prompt = require("prompt-sync")();
const msg = prompt("Enter The AFK Message > ")

client.on('ready', () => {
  console.log(`AFK Thingy Ready.`);
});

client.on('message', async message => {
  if (message.channel.type == 'dm' && message.author.id !== client.user.id){
    message.reply(msg);
  }
});

client.login(process.env.TOKEN);
