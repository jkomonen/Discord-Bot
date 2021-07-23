module.exports = {
    name: 'coinflip',
    description: '',
    enable: true,

    async execute(discord, client, args, cmd, message, prefix) {
        const choices = ['https://i.imgur.com/28BSgRT.png', 'https://i.imgur.com/fdto2mP.png'];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        message.channel.send(choice);
    }
}
