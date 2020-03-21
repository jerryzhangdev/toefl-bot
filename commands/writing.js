const Discord = require("discord.js")
exports.run = async(client, message, args, msg) => {
	let e = new Discord.RichEmbed()
		.setTitle("TOEFL writing Test")
		.setURL("https://www.testden.com/toefl/writing.htm")
		.setDescription("Besides speaking, the other main way we communicate is through writing. If you attend a native English speaking university you will be writing many reports, essays and term papers. You won't get far if you can't get your assignments done. And using the Internet to borrow other people's work will only get you expelled. The TOEFL test Writing section isn't as challenging as writing a term paper, but you definitely have to prove you know how to write a few paragraphs using proper grammar, and how to get your point across clearly and convincingly.\n\nThe IBT test Writing section has 2 tasks. 50 minutes is the total time allowed to complete the Writing section. Each of the questions is given a mark of 0-5. Your total score is then scaled to a value out of 30. For a decent score you must get at least 4 out of 5 for both writing tasks.")
		.setColor(require("random-hex").generate())
	msg.channel.send(e)
}

exports.help = {
	name: "writing",
	description: "Get Information On the TOEFL writing Test",
	usage: "tpo!writing",
	type: "toefl"
}