const Discord = require('discord.js');
const axios = require('axios');


const client = new Discord.Client();

const prefix = 'salutreaver ';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file=>file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready',()=>{
    console.log('Kmemes is online!');
});

client.on('message',message =>{
    if(!message.content.startsWith(prefix)||message.author.bot)return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'clear'){
        client.commands.get('clear').execute(message,args);
    }
    else if (command === 'ping'){
        client.commands.get('ping').execute(message,args);
    }else if (command === 'kick'){
        client.commands.get('kick').execute(message,args);
    }else if (command === 'ban'){
        client.commands.get('ban').execute(message,args);
    }else if (command === 'play'){
        client.commands.get('play').execute(message,args);
    }else if (command === 'leave'){
        client.commands.get('leave').execute(message,args);
    }else if (command === 'gif'){
        client.commands.get('gif').execute(message,args);
    }else if (command === 'changepseudo'){
        client.commands.get('changepseudo').execute(message,args);
    }

});
client.login('ODIyNDAwMTc3MzIyNDU5MTU2.YFRt2Q.-lCiug9Fy3cX_d6rEbSG82vmRvQ');