const Discord = require("discord.js")
exports.run = async(client, message, args, msg) => {
	let e = new Discord.RichEmbed()
		.setTitle("TOEFL Reading Test")
		.setURL("https://www.testden.com/toefl/reading.htm")
		.setDescription("The Reading section is done first in the IBT test. It is designed to test your ability to comprehend academic reading material. Academic means the passages are like what you would find in a textbook at university. All fields of study from chemistry to literature to psychology are possible topics of the reading passages. On average the length of a passage is about 700 words.\n\nTypically you will have 3 reading passages which will have 10 questions that you need to answer for each passage. Each passage is timed separately. If you get 3 passages, the total time allowed is 54 minutes. The reading section can have up to 4 passages with a total of 40 questions with a total time of 72 minutes.")
		.setColor(require("random-hex").generate())
	msg.channel.send(e)
}

exports.help = {
	name: "reading",
	description: "Get Information On the TOEFL Reading Test",
	usage: "tpo!reading",
	type: "toefl"
}