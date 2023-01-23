module.exports = {
  name: "ping",
  description: "Test the bots response time.",
  async execute(client, interaction) {
       interaction.reply({ content: `:ping_pong: **Pong ${client.ws.ping} ms**`, ephemeral:true });

  }
}