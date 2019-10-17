const chalk = require('chalk');
const trident = require('../../index.js');
class DiscordHandler {
    constructor() {
        this.Discord = require('discord.js');
        this.client = new this.Discord.Client();
        this.client.login(trident.config.token);
        console.log(chalk.blue.bold("[Trident] ") + chalk.cyan("Loading Discordhandler.."));

        this.client.on('ready', () => {
            console.log(chalk.blue.bold("[TridentDiscord] ") + chalk.cyan("Bot connected successfully.."));
        });

        this.client.on('message', msg => {
            if (msg.content.startsWith('-')) {
                trident.handlers.commandhandler.checkCommand(msg);
            }

        }); 
    }

}

module.exports = new DiscordHandler();
