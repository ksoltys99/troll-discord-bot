const Discord = require('discord.js');
require('dotenv').config();
const bot = new Discord.Client();

const token = process.env.TOKEN;

const userID = 000000000000000000; /* --- PUT USER ID HERE --- */
const userChanceForMessage = 50;	

bot.on('ready', () => {
	console.log('bot is ready for trolling');
})

bot.on('message', message => {
	if(userID == message.author.id){
		const randNum = Math.floor(Math.random() * 100);
		if(randNum > userChanceForMessage) message.delete();
	}
})

bot.login(token);