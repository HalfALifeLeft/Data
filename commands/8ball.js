/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.reply(`you need to ask a question for the 8ball to answer!`);
    const eightball = require(`8ball`)();
    const {
        Client,
        RichEmbed
    } = require(`discord.js`);
    const embed = new RichEmbed()
        .setColor(process.env.HEXCODE)
        .setTitle(`${eightball}`);
    message.channel.send({
        embed
    });
};

/*

GOOD! 
It is certain.
It is decidedly so.
Without a doubt.
Yes - definitely.
You may rely on it.
As I see it, yes.
Most likely.
Outlook good.
Yes.
Signs point to yes.

NEUTRAL!
Reply hazy, try again.
Ask again later.
Better not tell you now.
Cannot predict now.
Concentrate and ask again.

BAD!
Don't count on it.
My reply is no.
My sources say no.
Outlook not so good.
Very doubtful.

*/

module.exports.help = {
    name: `8ball`
};