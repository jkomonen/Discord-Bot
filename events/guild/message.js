module.exports = (discord, client, message) => {
    const prefix = ('-')

    // filter curse words //this infinitely spams
    // if ((message.content.includes('ok')) || (message.content.includes('ok.'))) return message.channel.send('ok.');

    // returns if message is from bot or doesn't start with prefix
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd);

    if (command) {
        if (command.enable === false) {
            return;
        }
        else {
            command.execute(discord, client, args, cmd, message, prefix);
        }
    }
}