/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = (client, message, args) => {
    let imageArray = [
        `http://i.imgur.com/y03B2dL.gif`,
        `http://i.imgur.com/Z5DpKer.gif`,
        `http://66.media.tumblr.com/89de7b404cf5cd01663ddd4bcae731a2/tumblr_nw37nuwXGG1r60zuio1_540.gif`,
        `http://i.imgur.com/SOMVzbs.gif`,
        `http://pa1.narvii.com/5864/52f54331ac6a0fe0edb59054c2787bf57f90e1ba_hq.gif`,
        `https://66.media.tumblr.com/9f6bbded87df598ea76836fbb0db8e6c/tumblr_mymyfha9TL1sm5fjzo1_500.gif`,
        `http://i.imgur.com/EVtWJHw.gif`,
        `https://i.pinimg.com/originals/65/67/4a/65674a6a3868d0f071352b5932022a2a.gif`,
        `http://i.imgur.com/la2DSbP.gif`
    ];
    let randomNumber = Math.floor(Math.random() * imageArray.length);
    console.log(randomNumber);
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setColor(process.env.HEXCODE)
        .setImage(imageArray[randomNumber]);
    message.channel.send({embed});
};