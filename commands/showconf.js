/* eslint-disable no-undef */
exports.run = (client, message) => {
    const guildConf = client.settings.ensure(message.guild.id, client.defaultSettings);
    let configProps = Object.keys(guildConf).map(prop => {
        return `${prop}  :  ${guildConf[prop]}\n`;
    });
    message.channel.send(`The following are the server's current configuration:
  \`\`\`${configProps}\`\`\``);
};