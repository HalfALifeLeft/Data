exports.run = (client, message, args) => {
    const { Client, RichEmbed } = require('discord.js');
    const embed = new RichEmbed()
      .setTitle("Origins")
      //.setAuthor(client.user.displayname, client.user.avatarURL)
      /*
       * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
       */
      .setColor(0xf2c300)
      .setDescription("Data was found by Starfleet in 2338 as the sole survivor on Omicron Theta in the rubble of a colony left after an attack from the Crystalline Entity. He was a synthetic life form with artificial intelligence and designed and built by Doctor Noonien Soong in his own likeness. Data is a self-aware, sapient, sentient and anatomically fully functional android who serves as the second officer and chief operations officer aboard the Federation starship USS Enterprise-D and later the USS Enterprise-E.")
      .setFooter("Created by Half#2428", "https://i.imgur.com/NVWwp1d.png")
      //.setThumbnail("https://i.imgur.com/yZAIrQR.jpg")
      /*
       * Takes a Date object, defaults to current date.
       */
      .setTimestamp()
    //  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
      /*
       * Inline fields may not display as inline if the thumbnail and/or image is too big.
       */
      .addField("Characteristics", "Data is immune to nearly all biological diseases and other weaknesses that can affect humans and other carbon-based lifeforms. Data does not require life support to function and does not register a bio-signature. Another unique feature of Data's construction is the ability to be dismantled and then re-assembled for later use. Data is vulnerable to technological hazards such as computer viruses, certain levels of energy discharges, ship malfunctions (when connected to the Enterprise main computer for experiments), and shutdowns whether through remote control shutdown devices or through use of his off switch, located on his lower back near where a human kidney would be. Data can perform tasks underwater without the need to surface and is also impervious to sensory-tactile emotions such as pain or pleasure. Despite being mechanical in nature, Data is treated as an equal member of the Enterprise crew in every regard.", true)
    //  .addField("Commands", "You can find the full documentation here(GDOC link)", true)
      /*
       * Blank field, useful to create some space.
       */
    //  .addField("Invite me to your server!", "[here](https://discordapp.com/oauth2/authorize?client_id=494001612822675458&scope=bot)", true)
      .setImage("https://i.imgur.com/ysVtDyb.jpg")
      message.channel.send({embed})};