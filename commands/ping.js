exports.run = async(client, message, args) => {
	message.channel.send("Pong!")

}

exports.help = {
	name: "ping",
	description: "Returns pong!",
	usage: "tpo!ping",
	type: "util"
}