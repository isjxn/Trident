const chalk = require('chalk');

const trident = require('../../index.js');
const client = trident.handlers.discordhandler.client;

config = {
    lvl: 9, // Set your permission name needed to run that command        <-- that's wip look at permission.js
    aliases: ['r', 'rld'], // Set your aliases that can be used to run the command
    topic: 'Administrator', // Topic is used for the Help command
    description: 'This command reloads all commands.' // Descirption is also used for the help command
}
//no idea how to make the aliases work 
class Command {
    //In the constructor you can set initlial values set before the command gets run
    constructor() {

    }

    // Here your command starts
    run(msg) {
        console.log(chalk.blue.bold("[TridentCommands] ") + chalk.cyan(`Reloading all commands..`) + chalk.green(` [Used by: ${msg.author.username}]`));
        msg.reply("**Reloading all commands**");
        trident.handlers.commandhandler.registerCommands(); // :)
    }
}

module.exports.config = config;
module.exports.command = new Command();