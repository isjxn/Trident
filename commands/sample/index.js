const trident = require('../../index.js');
const client = trident.handlers.discordhandler.client;

const config = {
    lvl: 1, // Set your permission name needed to run that command
    aliases: ['s', 'samp'], // Set your aliases that can be used to run the command
    topic: 'Moderator', // Topic is used for the Help command
    description: 'something different.' // Descirption is also used for the help command
}

class Command {
    //In the constructor you can set initlial values set before the command gets run
    constructor() {

    }

    // Here your command starts
    run(msg) {
        msg.reply("teasdasdest");
    }
}

module.exports.config = config;
module.exports.command = new Command();
