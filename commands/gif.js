const axios = require('axios');

module.exports = {
    name: 'gif',
    description: 'give a gif',
    async execute(message, args) {
        axios
        .get("http://api.giphy.com/v1/gifs/search?api_key=xb2sowRAV54xJjWai7MLoxXItJsKa4jx&q={{args}}&limit=5&lang=fr")
        .then((res)=> {
            console.log('RES:', res.data[0].url)
            message.reply(res.data[0].url)
          })
          .catch((err) =>{
            if(!isNaN(args[0])) return message.reply("Rentre un argument valide je vais pas faire le sale boulot a ta place"),console.log("is aNumber");
            console.log(err);
          })
    }
}