const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('gives you an information about the roundtrip latency'),

    async execute(interaction) {
        const sent = await interaction.reply({content: 'Pinging...', fetchReply: true, ephemeral: true});
        await interaction.editReply(`roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
    },
};