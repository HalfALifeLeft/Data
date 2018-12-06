
exports.run = (client, message) => {
  console.log('command ran')
const config = require("../config.json");
const { Client, RichEmbed } = require('discord.js');
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
      if (message.content.startsWith(config.prefix + "eval")) {
      let arrayOfID = ["444384280152637441", "341888659907149825"];
      if (!arrayOfID.includes(message.author.id)) return;//only ids above can use this
      try {
        let evaled = message.content.slice(2 + 4).trim(); 
      // you do .toLowerCase() on args when defining them, so you can't use them in your eval. I made it so it removes the prefix and four letters from the start of the word and then evals everything else
        let evaledCode = eval(evaled);//eval the code
//        message.delete();
        const embed = new RichEmbed()
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor(0x000000)
        .addField("Input 📥 ", `\`\`\`${evaled}\`\`\``)
        .addField("Output 📤 ", `\`\`\`${evaledCode}\`\`\``)
          message.channel.send(embed)
      } catch (err) {
//        message.delete();
        let evaled = message.content.slice(1 + 4).trim();
        const embed = new RichEmbed()
        .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor(0x000000)
        .addField("Evaled Command 📥 ", `\`\`\`${evaled}\`\`\``)
        .addField("Error ❌ ", `\`\`\`${err}\`\`\``)
          message.channel.send(embed)
      }}};