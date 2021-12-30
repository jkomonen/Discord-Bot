// FOR MONGODB TOO
// const profileModel = require('../../models/profileSchema');

module.exports = async (discord, client, message) => {
    const prefix = ('-')

    // filter curse words //this infinitely spams
    // if ((message.content.includes('ok')) || (message.content.includes('ok.'))) return message.channel.send('ok.');

    // returns if message is from bot or doesn't start with prefix
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    // ~~~FOR MONGODB BUT ITS WORK IN PROGRESS~~~ //
        // let profileData;
        // try {
        //     profileData = await profileModel.findOne({ userId: message.author.id });
        //     if (!profileData) {
        //         const profile = await profileModel.create ({
        //             userId: message.author.id,
        //             serverID: message.guild.id,
        //             coins: 1000,
        //             bank: 0
        //         });
        //         profile.save();
        //     }
        // }
        // catch (err) {
        //     console.log(err);
        // }

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