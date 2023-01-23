const { Client, Collection } = require('discord.js');
const { REST } = require('@discordjs/rest');
const config = require('./configs/config.json')
const { Routes } = require('discord-api-types/v9');

const client = new Client({
    intents: 32767,
});

module.exports = client;
client.commands = new Collection();
client.events = new Collection();
client.slashCommands = new Collection();
['commands', 'events', 'slash'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
})

const commands = client.slashCommands.map(({ execute, ...data }) => data);
// Register slash commands
const rest = new REST({ version: '10' }).setToken(config.token || process.env.token);
rest.put(
    Routes.applicationCommands(config.clientID, config.guildID),
    { body: commands },
).then(() => console.log('Successfully registered application commands.'))
    .catch(console.error)

client.login(config.token)
