module.exports = {
    name: 'ban',
    description: '',
    enable: true,

    execute(discord, client, args, cmd, message, prefix) {
        const member = message.mentions.users.first();

        if((message.member.roles.cache.some (role => role.name === 'Dameだめ')) || (message.member.roles.cache.some (role => role.name === 'Dameだめ++'))) {
            if (member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send('User has been banned');
            }
            else {
                message.channel.send('You could not ban that member');
            }
        }
        else {
            message.channel.send('You do not have permission to ban');
        }
    }
}
