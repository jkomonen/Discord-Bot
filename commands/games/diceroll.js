module.exports = {
    name: 'diceroll',
    description: '',
    enable: true,

    execute(discord, client, args, cmd, message, prefix) {
        const choices = ['1', '2', '3', '4', '5', '6'];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        const embed = new discord.MessageEmbed()
            .setTitle('Diceroll')
            .setColor('#4287f5')
            .setDescription(`You rolled a ${choice}`)
            .setTimestamp()
            .setFooter('This command was made by Buzz Bot')
        message.channel.send(embed);
    }
}
