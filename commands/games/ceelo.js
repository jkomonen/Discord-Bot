module.exports = {
    name: 'ceelo',
    description: '',
    enable: true,

    execute(discord, client, args, cmd, message, prefix) {
        const choices = ['1', '2', '3', '4', '5', '6'];
        const choice = [];
        for (let i = 0; i < 3; i++) {
            choice.push(choices[Math.floor(Math.random() * choices.length)]);
        }
        const embed = new discord.MessageEmbed()
            .setTitle('Ceelo')
            .setColor('#4287f5')
            .setDescription(`You rolled a ${choice[0]}, ${choice[1]} and ${choice[2]}`)
            .setTimestamp()
            .setFooter('This command was made by Buzz Bot');
        message.channel.send(embed);
    }
}