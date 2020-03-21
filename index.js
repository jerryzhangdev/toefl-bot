const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require("fs");

const msicPlayer = require("discord-music-wrapper")
const mp = new msicPlayer("AIzaSyB0jlQgNe360jb-Fxd-P5SbdSy-MynV5Ao")
exports.mp = mp;
exports.musicPlayer = mp;
//Command Handler
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();
client.cname = new Discord.Collection();
client.desc = new Discord.Collection();
client.use = new Discord.Collection();
client.music = new Discord.Collection();
client.util = new Discord.Collection();
client.toefl = new Discord.Collection();
let music = []
let toefl = []
let util = []
let cmds = []
exports.music = music;
exports.toefl = toefl;
exports.util = util;
exports.cmds = cmds
fs.readdir("./commands/", (err, files) => {

    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log("Successfully loaded " + file)
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        client.cname.set(commandName, props.help.name)
        client.desc.set(commandName, props.help.description)
        client.use.set(commandName, props.help.usage)
        if(props.help.type === "music"){
            client.music.set(commandName, props.help.name)
            music.push(commandName)
        }else if(props.help.type === "util"){
            client.util.set(commandName, props.help.name)
            util.push(commandName)
        }else if(props.help.type === "toefl"){
            client.toefl.set(commandName, props.help.name)
            toefl.push(commandName)
        }
        cmds.push(commandName)
    });
});
    //Events "handler"
    fs.readdir('./events/', (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            let eventFunc = require(`./events/${file}`);
            console.log("Successfully loaded " + file)
            let eventName = file.split(".")[0];
            client.on(eventName, (...args) => eventFunc.run(client, ...args));
        });
});

client.on("ready", () => {
setInterval(() => {
    let list = [`Serving ${client.guilds.size} guilds`, `Helping People with TOEFL test`, `Serving ${client.users.size} users`, `Made by Hydrogen Studio`]
    client.user.setPresence({ game: { name: list[Math.floor(Math.random() * list.length)] }, status: 'online' })
}, 20000)
console.log(`${client.user.tag} is online in ${client.guilds.size} guilds with ${client.users.size} users`)
});
client.login("NjkwMzExNzAyMDg0MDU5MTQ4.XnWbfA.s0zcs9OvI0FpI-PIqa3bsTrDEHY")