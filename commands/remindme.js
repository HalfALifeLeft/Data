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
        console.log(`Days!`);
        time = 24 * 60 * 60 * 1000 * (timeRaw.replace(`d`, ``));
        timeTrue = timeRaw.replace(`d`, ``);
        timeUnit = `days`;
        console.log(time + `ms`);
    } else if (timeRaw.toLowerCase().includes(`h`)) {
        console.log(`Hours!`);
        time = 60 * 60 * 1000 * (timeRaw.replace(`h`, ``));
        timeTrue = timeRaw.replace(`h`, ``);
        timeUnit = `hours`;
        console.log(time + `ms`);
    } else if (timeRaw.toLowerCase().includes(`m`)) {
        console.log(`Minutes!`);
        time = 60 * 1000 * (timeRaw.replace(`m`, ``));
        timeTrue = timeRaw.replace(`m`, ``);
        timeUnit = `minutes`;
        console.log(time + `ms`);
    } else if (timeRaw.toLowerCase().includes(`s`)) {
        console.log(`Seconds!`);
        time = 1000 * (timeRaw.replace(`s`, ``));
        timeTrue = timeRaw.replace(`s`, ``);
        timeUnit = `seconds`;
        console.log(time + `ms`);
    }

    // Make sure content will fit in the message we send

    if (content.length > 2000-46) {
        console.log(`Content is greater than 1954 characters!`);
        message.reply(`Please try and make what you need to be reminded of a bit shorter! \`TOO MANY CHARACTERS\`.`);
        return;
    }

    client.setTimeout(() => {
        console.log(`reminded!`);
        message.reply(`You asked me to remind you of: \`${content}\` ${timeTrue} ${timeUnit} ago!`); //46 chars
    }, time);

};
module.exports.help = {
    name: `remindme`
};