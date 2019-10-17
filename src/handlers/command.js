const chalk = require('chalk');
const fs = require('fs');

const trident = require('../../index.js');

class CommandHandler {
    constructor() {
        this.commands = [];
        this.commandsAliases = [];

        this.files = {};
        console.log(chalk.blue.bold("[Trident] ") + chalk.cyan("Loading Commandhandler.."));
        this.registerCommands();
    }

    registerCommands() {
        var tempCommands = [];
        var tempCommandsAliases = [];
        fs.readdir('./commands/', (err, files) => {
            files.forEach((file) => {
                try {
                    delete require.cache[require.resolve(`../../commands/${file}/index.js`)];
                    console.log(chalk.blue.bold("[TridentCommands] " + chalk.cyan(`Found Command: ${file}`)));
                    var a = require(`../../commands/${file}/index.js`);
                    this.commandsAliases.push(...a.config.aliases);
                    this.commands.push(file);
                    this.files[file] = a;
                    a.config.aliases.forEach((alias) => {
                        this.files[alias] = a;
                    });
                } catch (e) {
                    console.log(chalk.blue.bold("[TridentCommands] " + chalk.cyan(`Found Command: ${file}`) + chalk.red(`${chalk.bold(' [Error]')} No index.js found`)));
                }
            });
        });
        this.commands = tempCommands;
        this.commandsAliases = tempCommandsAliases;
    }

    checkCommand(msg) {
        var content = msg.content.toString().toLowerCase();
        var commandFixed = content.split(' ')[0].replace(trident.config.prefix, '');
        if (this.commands.includes(commandFixed)) {
            checkExistance(commandFixed, this.files);
        } else if (this.commandsAliases.includes(commandFixed)) {
            checkExistance(commandFixed, this.files);
        }
        function checkExistance(command, files) {
            var commandConfig = files[command].config;
            if (trident.handlers.permissionhandler.hasPermission(msg.author.id, commandConfig.lvl)) {
                var command = files[command].command;
                command.run(msg);
            } else {
                msg.reply("**[:warning:] You are not allowed to run that command! [:warning:]**");
            }
        }
    }
}

module.exports = new CommandHandler();