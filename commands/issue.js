/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    message.channel.send(`Please create an issue on my github page! https://github.com/HalfALifeLeft/Data/issues/new`);
};
module.exports.help = {
    name: `issue`
};