require('dotenv').config();
const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');
const fs = require('fs');

var trident = {
    handlers: [],
    config: {
        token: process.env.TOKEN,
        prefix: '-'
    }
}

clear();

figlet('Trident', function(err, data) {
    if (err) {
        console.log(chalk.red.bold("[Error] ") + chalk.red(err));
    }

    console.log(chalk.blue.bold(data) + "\n" + chalk.blue("Copyright © 2019 by ") + chalk.cyan("NanoLogic\n"));
});

setTimeout(function() {
    console.log(chalk.blue.bold("[Trident] ") + chalk.cyan("Starting TridentEngine.."));
    fs.readdirSync('./src/handlers/').forEach(function(handler) {
        trident.handlers[`${handler.replace('.js', '')}handler`] = require(`./src/handlers/${handler}`);
    });
}, 500);

module.exports = trident;