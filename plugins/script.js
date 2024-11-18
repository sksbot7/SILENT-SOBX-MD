const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
sy4m.vercrl.app

oomb😂
*╰──────────────●●►*

> *POWERED BY 𝗦𝗞𝗦 𝙱ᷤ𝙾ᷜ𝚃ᷤ*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "𝗦𝗞𝗦 𝙱ᷤ𝙾ᷜ𝚃ᷤ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'sks bot😂',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://sy4m.vercel.app" ,
thumbnailUrl: "https://graph.org/file/14c9e1c99f5f2b1ad693d.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
