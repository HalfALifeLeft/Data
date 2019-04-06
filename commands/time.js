/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

var { DateTime } = require(`luxon`);

module.exports.run = async (client, message, args) => {

    var dt = DateTime.fromObject({
        zone: `${args[0]}`
    });

    if (dt.isValid == false) {
        return message.reply(`That isn't a valid timezone!`);
    }

message.channel.send(dt.toString());

};
module.exports.help = {
    name: `time`
};