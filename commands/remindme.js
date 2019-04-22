/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports.run = async (client, message, args) => {

    let timeRaw = args[0];
    let time = 0;
    let timeTrue = 0;
    let content = args.slice(1).join(` `);
    let timeUnit = ``;

    //Determine how long to wait before reminding

    if (timeRaw.toLowerCase().includes(`d`)) {
        time = 24 * 60 * 60 * 1000 * (timeRaw.replace(`d`, ``));
        timeTrue = timeRaw.replace(`d`, ``);
        if (timeTrue > 7) {
            message.reply(`I can't remind you of anything in more than a week, please come back closer to the event or use a time less than 1 week!`);
            return;
        }
        timeUnit = `days`;
    } else if (timeRaw.toLowerCase().includes(`h`)) {
        time = 60 * 60 * 1000 * (timeRaw.replace(`h`, ``));
        timeTrue = timeRaw.replace(`h`, ``);
        timeUnit = `hours`;
    } else if (timeRaw.toLowerCase().includes(`m`)) {
        time = 60 * 1000 * (timeRaw.replace(`m`, ``));
        timeTrue = timeRaw.replace(`m`, ``);
        timeUnit = `minutes`;
    } else if (timeRaw.toLowerCase().includes(`s`)) {
        time = 1000 * (timeRaw.replace(`s`, ``));
        timeTrue = timeRaw.replace(`s`, ``);
        timeUnit = `seconds`;
    }

    // Make sure content will fit in the message we send

    if (content.length > 2000-46) {
        message.reply(`Please try and make what you need to be reminded of a bit shorter! \`TOO MANY CHARACTERS\`.`); //1954 characters
        return;
    }

    message.reply(`I'll remind you of \`${content}\` in ${timeTrue} ${timeUnit}!`);

    client.setTimeout(() => {
        message.reply(`You asked me to remind you of: \`${content}\` ${timeTrue} ${timeUnit} ago!`); //46 chars
    }, time);

};
module.exports.help = {
    name: `remindme`
};