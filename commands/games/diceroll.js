module.exports = {
    name: 'diceroll',
    description: '',
    enable: true,

    execute(discord, client, args, cmd, message, prefix) {
        const choices = ['https://i.imgur.com/uAecgop.png', 'https://i.imgur.com/JaDMqMC.png', 'https://i.imgur.com/tOXMmU3.png', 'https://i.imgur.com/BS5Sr9D.png', 'https://i.imgur.com/QSZg2i8.png', 'https://i.imgur.com/NRFMfGz.png'];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        // const embed = new discord.MessageEmbed()
        //     .setTitle('Diceroll')
        //     .setColor('#4287f5')
        //     .setDescription(`You rolled a ${choice}`)
        //     .setTimestamp()
        //     .setFooter('This command was made by Buzz Bot')
        // message.channel.send(embed);
        message.channel.send(choice);
    }
}
