module.exports = {
    name: 'clear',
    descripstion:"Clear message",
    async execute(message, args){
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas la permission...t'es vraiment une vicos");
        if(isNaN(args[0])) return message.reply("Rentre un nombre valide je vais pas faire le sale boulot a ta place"),console.log("is NNaN");
        if(args[0] > 100) return message.reply("Tu peux pas en suppr + de 100 du calme bg"), console.log("plus de 100 msg");
        if(args[0] < 1) return message.reply("T'as vraiment compris l'interet de la commande ? Suppr au moins 1 message"), console.log("pas de msg suppr");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}