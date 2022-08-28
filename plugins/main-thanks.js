let handler = async (m, { conn, text, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
  let wm = global.wm
krizyn = {
    key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
    },
  message: { 
  "extendedTextMessage": {
  "text": '*Sama-Sama*',
  "title": wm,
  'jpegThumbnail': 'https://telegra.ph/file/20509b31b6e05ff999daa.jpg',
        }
       } 
     }
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/989bd78701f27eec3293a.png', krizyn, { packname: "𝙍𝙄𝘿𝙃𝙊", author: "@𝙍𝙄𝘿𝙃𝙊" })
}

handler.customPrefix = /^(Terima Kasih|Thanks|tq|makasih)$/i
handler.command = new RegExp

module.exports = handler
