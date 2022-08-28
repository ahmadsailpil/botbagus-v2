let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/b9907b917e10db107e464.png', m, { packname: "𝙍𝙄𝘿𝙃𝙊", author: "@𝘼𝙎𝙀𝙋𝘽𝙊𝙏𝙕" })
}

handler.customPrefix = /^(nyimak|menyimak)$/i
handler.command = new RegExp

module.exports = handler
