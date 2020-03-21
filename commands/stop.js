const Discord = require("discord.js")
const { musicPlayer } = require("../index.js")
exports.run = async(client, message, args, msg) => {
	musicPlayer.stop(message)
}

exports.help = {
	name: "stop",
	description: "Break's over! Stop The Song!",
	usage: "tpo!stop",
	type: "music"
}