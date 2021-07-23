module.exports = {
    name: 'coinflip',
    description: '',
    enable: true,

    async execute(discord, client, args, cmd, message, prefix) {
        const choices = ['heads', 'tails'];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        const embed = new discord.MessageEmbed()
            .setTitle('Coinflip')
            .setColor('#4287f5')
            .setDescription(`You flipped ${choice}`)
            .setTimestamp()
            .setFooter('This command was made by Buzz Bot')
        message.channel.send(embed);
    }
}
