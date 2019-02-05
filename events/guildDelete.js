/* eslint-disable no-console */
/* eslint-disable no-undef */
module.exports = (client, guild) => {
    console.log(`I have left ${guild.name} at ${new Date()}`);
    client.settings.delete(guild.id);
};