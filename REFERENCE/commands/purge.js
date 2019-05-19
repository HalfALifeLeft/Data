/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
module.exports.run = async (client, message, args, tools) => {

    if (message.member.hasPermission(`MANAGE_MESSAGES`, false, true, true)) {
        // allowed access to command
        //fetch the amount of messages caller wants to delete, stored in args[0]
        let number = parseInt(args[0]);
        if (isNaN(args[0])) return message.reply(`**Please Supply a valid amount of messages to purge**`);
        //this checks if args[0] is not a number and returns statement if it is not a number
        //also need to check if its less than 100 because 100 is the max you can delete at once
        if (args[0] > 100) return message.reply(`**Please supply a message less than 100**`);
        //this checks if args is more than 100, if it is then returns message
        if (args[0] == 100) {
            args[0] = 99;
        }
        number = parseInt(args[0]) + 1;
        //now we can delete messages
        message.channel.bulkDelete(number)
            .then(messages => {
                message.reply(`**Successfully cleared the bridge of \`${parseInt(args[0])}\` messages**`)
                .catch(e => {
                    console.error(e);
                });
            })
            //sends how many messages were deleted to chat
            .catch(error => {
                message.reply(`**ERROR:** ${error.message}`)
                .catch(e => {
                    console.error(e);
                });
                console.error(error);
            });
        //checks for errors and puts them in the channel
    } else {
        // not allowed access
        message.reply(`you lack the \`MANAGE_MESSAGES\` permission`)
        .catch(e => {
            console.error(e);
        });
    }
};
module.exports.help = {
    name: `purge`
};