module.exports = {
    name: 'ping',
    description: '',
    enable: true,

    async execute(discord, client, args, cmd, message, prefix) {
        const m = await message.channel.send('Ping?');
        m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms`);
    }
}
