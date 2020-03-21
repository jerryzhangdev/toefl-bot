const Discord = require("discord.js")
exports.run = async(client, message, args, msg) => {
	let e = new Discord.RichEmbed()
		.setTitle("TOEFL speaking Test")
		.setURL("https://www.testden.com/toefl/speaking.htm")
		.setDescription("If you want to get a degree from a native English speaking university or pursue a career in a native English speaking country, you must be able to speak English fluently. You won't get far if you can't get your thoughts or questions across to people. The Speaking section will test your ability to communicate effectively in a variety of situations.\n\nThe IBT test Speaking section had 6 tasks originally, but as of August 2019 there are now only 4 tasks. There are only 3 kinds of question formats. It will take about 17 minutes in total to complete the Speaking section. Each of the questions is given a mark of 0-4. Your total score is then scaled to a value out of 30. For a decent score you must get at least 3 out of 4 for all the speaking tasks.")
		.setColor(require("random-hex").generate())
	msg.channel.send(e)
}

exports.help = {
	name: "speaking",
	description: "Get Information On the TOEFL speaking Test",
	usage: "tpo!speaking",
	type: "toefl"
}