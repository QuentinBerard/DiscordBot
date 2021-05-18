module.exports = {
    name: 'kick',
    descripstion:"kick every person you want",
    execute(message,args){
        const member = message.mentions.users.first();
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Tu ne peut pas le kick t'es trop pas assez fort (chee vicos)");
        else if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("Aie aie aie encore quelqu'un envoyé a la rue...")
        }
    }
}