const Discord = require("discord.js")
exports.run = async(client, message, args, msg) => {
	let e = new Discord.RichEmbed()
		.setTitle("TOEFL Listening Test")
		.setURL("https://www.testden.com/toefl/listening.htm")
		.setDescription("In the Listening section of the IBT test, you will hear dialogues and academic talks, and you will be tested on your ability to understand them. You will hear each passage only once, and then answer questions after each is finished. The listening questions ask about the main idea, supporting details, and the way the speakers use language. You need to answer each listening question based on what is stated or implied by the speakers. Keep your headphones on for the entire Listening section because there is audio for the questions too, they are not just seen on your screen.\n\nUsually you will have 5 listening passages. There will be more academic talks than there are dialogues. Each academic talk will have 6 listening questions. Each dialogue will have 5 listening questions. The timer only counts down as you answer the questions. If you get 5 passages, the total time allowed is 41 minutes. The listening section can have up to 7 passages with a total time of 57 minutes.")
		.setColor(require("random-hex").generate())
	msg.channel.send(e)
}

exports.help = {
	name: "listening",
	description: "Get Information On the TOEFL Listening Test",
	usage: "tpo!listening",
	type: "toefl"
}