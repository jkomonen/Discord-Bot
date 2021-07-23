module.exports = {
    name: 'unmute',
    description: '',
    enable: true,

    execute(discord, client, args, cmd, message, prefix) {
        const target = message.mentions.users.first();

        if((message.member.roles.cache.some (role => role.name === 'Dameだめ')) || (message.member.roles.cache.some (role => role.name === 'Dameだめ++'))) {
            if (target) {
                const mainRole = message.guild.roles.cache.find(role => role.name === 'Valid');
                const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                const memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
            }
            else{
                message.channel.send('Cant find that member!');
            }
        }
        else {
            message.channel.send('You do not have permission to unmute');
        }
    }
}