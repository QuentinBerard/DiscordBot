module.exports = {
    name: 'changepseudo',
    descripstion:"Clear message",
    async execute(message, args){
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("T'a meme pas le droit de faire ca ? tu dois vraiment etre naze");

        let user = message.mentions.users.first();
        if (!user) return message.channel.send("J'ai compris mais t'a pas dis qui sale bouff")

        let nick = args.slice(1).join(" ");
        if (!nick) return message.channel.send("Son nouveau pseudo il est ou ? C'est ca réécrit bouffon")

        let member = message.guild.members.cache.get(user.id);

        await member.setNickname(nick);
        return message.channel.send("EH UN NOUVEAU PSEUDO UN !")

    }}