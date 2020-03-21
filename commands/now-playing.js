const Discord = require("discord.js")
const { musicPlayer } = require("../index.js")
exports.run = async(client, message, args, msg) => {
	musicPlayer.nowPlaying(message)
}

exports.help = {
	name: "now-playing",
	description: "Forgot the song you are listening to? Don't Worry, I've got you.",
	usage: "tpo!now-playing",
	type: "music"
}