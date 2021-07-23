const fs = require('fs');

// recursively calls all of the files in commands
module.exports = (client, discord) => {
    const load_dir = (dirs) => {
        const commands_files = fs.readdirSync(`./commands/${dirs}`).filter(file => file.endsWith('.js'));

        for (const file of commands_files) {
            const command = require(`../commands/${dirs}/${file}`);
            if (command.name) {
                client.commands.set(command.name, command);
            }
            else {
                continue;
            }
        }
    }

    ['admin', 'gambling', 'games', 'misc'].forEach(e => load_dir(e));
}