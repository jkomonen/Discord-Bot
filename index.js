const discord = require('discord.js');
const client = new discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER'] });
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');

client.commands = new discord.Collection();
client.events = new discord.Collection();


['commands', 'events'].forEach(handler => {
    require(`./handlers/${handler}`)(client, discord);
});


// auto assigns 'Valid' default role //add in events/guild
client.on('guildMemberAdd', guildMember => {
	const welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Valid');
    guildMember.roles.add(welcomeRole);
});


client.login(process.env.token);