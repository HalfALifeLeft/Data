/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
exports.run = (client, message, args) => {
    let content = args.slice(1).join(` `);
    let imageArray = [
        `http://i.imgur.com/Z5DpKer.gif`,
        `http://66.media.tumblr.com/89de7b404cf5cd01663ddd4bcae731a2/tumblr_nw37nuwXGG1r60zuio1_540.gif`,
        `http://i.imgur.com/SOMVzbs.gif`,
        `http://pa1.narvii.com/5864/52f54331ac6a0fe0edb59054c2787bf57f90e1ba_hq.gif`,
        `https://66.media.tumblr.com/9f6bbded87df598ea76836fbb0db8e6c/tumblr_mymyfha9TL1sm5fjzo1_500.gif`,
        `http://i.imgur.com/EVtWJHw.gif`,
        `https://i.pinimg.com/originals/65/67/4a/65674a6a3868d0f071352b5932022a2a.gif`,
        `https://media1.tenor.com/images/09005550fb8642d13e544d2045a409c5/tenor.gif?itemid=7883854`,
        `https://media1.tenor.com/images/b214bd5730fd2fdfaae989b0e2b5abb8/tenor.gif?itemid=12307787`,
        `https://media1.tenor.com/images/f183185c552228743a6a7b450cdb3218/tenor.gif?itemid=12668700`,
        `https://media1.tenor.com/images/906684cf8e854f314252c398c99b3439/tenor.gif?itemid=3532074`,
        `https://media1.tenor.com/images/76322bd142e7ed8d81c6885323a94b17/tenor.gif?itemid=9449283`,
        `https://media1.tenor.com/images/7139ab365bba6f38685f0aeaf3d985ac/tenor.gif?itemid=12668599`,
        `https://media1.tenor.com/images/f4489c22337de1d5c5a3eb20391441b1/tenor.gif?itemid=12668694`,
        `https://media1.tenor.com/images/54a7397eb581947d2e5848aea0cb2ea8/tenor.gif?itemid=12159914`,
        `https://media1.tenor.com/images/2bd33b3e80a23cd78408333091a4ad09/tenor.gif?itemid=12252525`,
        `https://media1.tenor.com/images/7917b4bbc83411df4d316745331cb20f/tenor.gif?itemid=3413100`,
        `https://media1.tenor.com/images/84980520e680ea68fea9adf2c0e2ff9e/tenor.gif?itemid=9803078`,
        `https://media1.tenor.com/images/7db5f172665f5a64c1a5ebe0fd4cfec8/tenor.gif?itemid=9200935`,
        `https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093`,
        `https://media1.tenor.com/images/40aed63f5bc795ed7a980d0ad5c387f2/tenor.gif?itemid=11098589`,
        `https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif?itemid=11074788`,
        `https://media1.tenor.com/images/b4ba20e6cb49d8f8bae81d86e45e4dcc/tenor.gif?itemid=5634582`,
        `https://media1.tenor.com/images/059e93bd8a1ed2eef5d36f93442242d4/tenor.gif?itemid=4968922`,
        `https://media1.tenor.com/images/72627a21fc298313f647306e6594553f/tenor.gif?itemid=9096291`,
        `https://media1.tenor.com/images/49a21e182fcdfb3e96cc9d9421f8ee3f/tenor.gif?itemid=3532079`,
        `https://media1.tenor.com/images/d3dca2dec335e5707e668b2f9813fde5/tenor.gif?itemid=12668677`,
        `https://media1.tenor.com/images/1a73e11ad8afd9b13c7f9f9bb5c9a834/tenor.gif?itemid=13366388`,
        `https://media1.tenor.com/images/868514ccca94037608a50a9bd60e69ff/tenor.gif?itemid=13400355`
    ];
    let randomNumber = Math.floor(Math.random() * imageArray.length);
    let usersMentioned = message.mentions.users.array();

    if(message.mentions.users.find(val => val.username === message.author.username)) {
        message.channel.send(`Awww don't be lonely! Take a hug from me!`);
        const { Client, RichEmbed } = require(`discord.js`);
        const embed = new RichEmbed()
            .setColor(process.env.HEXCODE)
            .setImage(`https://i.pinimg.com/originals/56/7b/0d/567b0d7c708f70bb27bc9c1532d1a779.gif`);
        message.channel.send({embed});
        return;
    }

    if(usersMentioned.length === 0) {
        message.channel.send(`You can't hug the air! Tag someone to hug them!`);
        return;
    }

    message.channel.send(`${message.author} hugs ${message.mentions.users.array().toString().replace(`,`, `, `)} ${content}`);
    const { Client, RichEmbed } = require(`discord.js`);
    const embed = new RichEmbed()
        .setColor(process.env.HEXCODE)
        .setImage(imageArray[randomNumber]);
    message.channel.send({embed});
};