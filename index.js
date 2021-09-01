const rope = require("aoi.js")
var fs = require('fs');
const bot = new rope.Bot({
  token: process.env.token,
  prefix: "?",
  mobile: false,
  fetchInvites: true
})
bot.onLeave()
bot.onJoined()
bot.onMessage()
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for (const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
}

//komutları aşağıya yaz




//komutları yukarıya yaz

//variablelar
bot.variables({
 prefix:"?" //her variabledan sonra virgül (,) koy
})

//statusler
bot.status({
    text: `RopE#0007 🧙‍♂️`,
    type: "STREAMING",
    status: "online",
    time: 12
})





