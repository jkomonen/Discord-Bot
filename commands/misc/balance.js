// mongodb
module.exports = {
    name: 'balanceeeeeeeeeeeeeeee',
    description: 'prints user balance',
    enable: true,

    execute(discord, client, args, cmd, message, prefix) {
        message.channel.send(`Your wallet balance is ${profileData.coins}, your banks balance is ${profileData.bank}`);
    },
}
