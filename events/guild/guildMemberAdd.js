// mongodb
const profileModel = require('../../models/profileSchema');

module.exports = async (member) => {
    const profile = await profileModel.create ({
        userId: member.id,
        serverId: member.guild.id,
        coins: 1000,
        bank: 0
    });
    profile.save();
}