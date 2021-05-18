module.exports = {
    name: 'ban',
    descripstion:"ban every person you want",
    execute(message,args){
        const member = message.mentions.users.first();
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Tu ne peut pas le ban t'es trop pas assez fort (chee vicos)");
        else if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("Cet individu a bien été envoyé aux oubliettes.")
        }
    }
}
