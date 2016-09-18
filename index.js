const Discord = require('discord.io');

const bot = new Discord.Client({
    token: "",
    autorun: true
});

bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
});

bot.on('message', function(user, userID, channelID, message, event) {
    let content = message.toLowerCase();
    let pattern = /^(y[(o|u)]+|u+)(?=($|\s))/;
    if (pattern.exec(content) != null) {
        console.log("YOOOOUUUU @ "+user);
        bot.uploadFile({
            to: channelID,
            file: "souljaboy.png"
        });
    }
});