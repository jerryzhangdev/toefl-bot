const Discord = require("discord.js")
const { musicPlayer } = require("../index.js")
exports.run = async(client, message, args, msg) => {
	let arg = args.join(' ')
	if(!arg)return(msg.channel.send("please enter a song to play!"))
	musicPlayer.play(message, arg)
}

exports.help = {
	name: "play",
	description: "Play Music When you are on a break!",
	usage: "tpo!play [song name]",
	type: "music"
}