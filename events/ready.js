const { prefix } = require('../configs/config.json');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Logged in as ${client.user.tag}`);

        client.user.setStatus("online")
        client.user.setActivity(`${prefix}help | SlashCommand`, { type: 'LISTENING' })

    }
};