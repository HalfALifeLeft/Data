/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
  const guildConf = client.settings.ensure(message.guild.id, client.defaultSettings);
    let configProps = Object.keys(guildConf).map(prop => {
        return `${prop}  :  ${guildConf[prop]}\n`;
    });
    message.channel.send(`The following are the server's current configuration:
  \`\`\`${configProps}\`\`\``);
};
module.exports.help = {
    name: `showconf`
};