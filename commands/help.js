let index = require("../index.js")
const Discord = require("discord.js")
exports.run = async(client, message, args, msg) => {
	if(!args[0]){
	let command;
	index.cmds.forEach(c => {
		command += `**__${c}__** | Usage: ${client.use.get(c)} | Description: ${client.desc.get(c)}\n\n`
	})
	let e = new Discord.RichEmbed()
		.setTitle("Help Page")
		.setDescription("Use `tpo!help [category name]` to get commands of a category")
		.addField("**__toefl__**", "The commands that help you with the TOEFL test")
		.addField("**__util__**", "The commands that shows you info on bot & helpful commands")
		.addField("**__music__**", "Music commands that you can use during break.")
		.setColor(require("random-hex").generate())
		.setTimestamp();
	message.channel.send(e)
	}else if(args[0].toLowerCase() === "toefl"){
	let toefl;
		index.toefl.forEach(c => {
			toefl += `**__${c}__** | Usage: ${client.use.get(c)} | Description: ${client.desc.get(c)}\n\n`
		})
	let e = new Discord.RichEmbed()
		.setTitle("Help Page")
		.setDescription(toefl.slice(9))
		.setColor(require("random-hex").generate())
		.setTimestamp();
	message.channel.send(e)
	}else if(args[0].toLowerCase() === "music"){
	let music;
		index.music.forEach(c => {
			music += `**__${c}__** | Usage: ${client.use.get(c)} | Description: ${client.desc.get(c)}\n\n`
		})
	let e = new Discord.RichEmbed()
		.setTitle("Help Page")
		.setDescription(music.slice(9))
		.setColor(require("random-hex").generate())
		.setTimestamp();
	message.channel.send(e)
	}else if(args[0].toLowerCase() === "util"){
	let util;
		index.util.forEach(c => {
			util += `**__${c}__** | Usage: ${client.use.get(c)} | Description: ${client.desc.get(c)}\n\n`
		})
	let e = new Discord.RichEmbed()
		.setTitle("Help Page")
		.setDescription(util.slice(9))
		.setColor(require("random-hex").generate())
		.setTimestamp();
	message.channel.send(e)
	}


}

exports.help = {
	name: "Help",
	description: "Get a list of commands!",
	usage: "tpo!help [command(optional)]",
	type: "util"
}