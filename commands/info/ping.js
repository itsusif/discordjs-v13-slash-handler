const { Message, Client } = require("discord.js");

module.exports = {
        name: "ping",
        description: `Test the bots response time.`,
        aliases: [],
         async execute(client, message, args) {
                message.reply({ content: `:ping_pong: **Pong ${client.ws.ping} ms**` }).catch((err) => {
      console.log(`i couldn't reply to the message: ` + err.message)                      });
        },
};