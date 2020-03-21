const Discord = require("discord.js")
const { musicPlayer } = require("../index.js")
exports.run = async(client, message, args, msg) => {
	musicPlayer.showQueue(message)
}

exports.help = {
	name: "queue",
	description: "Shows you the song queue",
	usage: "tpo!queue",
	type: "music"
}