const Discord = require("discord.js")
const { musicPlayer } = require("../index.js")
exports.run = async(client, message, args, msg) => {
//	if(!args[0])return(msg.channel.send("Please enter your volume!"))
	musicPlayer.volume(message, parseInt(args[0]))
}

exports.help = {
	name: "vol",
	description: "Too Loud? Can't Hear? I've got you!",
	usage: "tpo!vol [new volume number]",
	type: "music"
}