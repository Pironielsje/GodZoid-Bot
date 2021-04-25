const Discord = require('discord.js')
const bot = new Discord.Client()
const config = require('./config.json')

bot.on('ready', () => {
    console.log(`${bot.user.username} is ready and steady to go!`)
    bot.user.setActivity(';help', { type: 'WATCHING' })
})

bot.login(process.env.token)