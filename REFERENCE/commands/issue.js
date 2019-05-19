/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    message.channel.send(`Please create an issue on my github page or join my support server! https://discord.gg/gDrPFX2 https://github.com/HalfALifeLeft/Data/issues/new`)
    .catch(e => {
        console.error(e);
    });
};
module.exports.help = {
    name: `issue`
};