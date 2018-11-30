exports.run = (client, message, args) => {
    const { Client, RichEmbed } = require('discord.js');
    const embed = new RichEmbed()
      .setTitle("Data Help")
      .setColor(0xf2c300)
      .setDescription("I am Data, an android created by Doctor Noonien Soong.")
      .setFooter("Created by Half#2428", "https://i.imgur.com/NVWwp1d.png")
      .setTimestamp()
      .addField("**Admin:**", "**d!purge** - Using this command will purge the selected amount of messages plus one. (*d!purge [number]*)\n**d!reload** - This command will reload another command, used to put changes into effect. (*d!reload [command]*))", false)
      .addField("**User:**", "**d!info:** - This command will provide about the origins of Data (*d!info*)\n**d!kitty:** - Gets a random picture of a kitty. (*d!kitty*)\n**d!meme:** - Gets a random meme from r/memes. (*d!meme*)\n**d!ping:** - Gets the bot's ping. (*d!ping*)")
      message.channel.send({embed})};