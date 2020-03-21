const Discord = require("discord.js")
const { musicPlayer } = require("../index.js")
exports.run = async(client, message, args, msg) => {
	musicPlayer.skip(message)
}

exports.help = {
	name: "skip",
	description: "Skip a song you don't like!",
	usage: "tpo!skip",
	type: "music"
}