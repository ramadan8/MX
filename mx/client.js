const { Client, Intents } = require("discord.js");

module.exports = new Client({ intents: [Intents.FLAGS.GUILDS] });