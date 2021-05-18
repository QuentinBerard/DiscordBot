module.exports = {
    name: 'ping',
    descripstion:"this is funny u can play as much as you want!",
    execute(message,args){
        message.channel.send('pong!');
    }
}