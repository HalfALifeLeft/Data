// eslint-disable-next-line no-undef
module.exports = (client) => {
    // eslint-disable-next-line no-console
    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
};