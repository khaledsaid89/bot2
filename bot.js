const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603538928078946305")
setInterval(function() {
channel.send(`Khaled Top`);
}, 30)
})

client.login(process.env.BOT_TOKEN);