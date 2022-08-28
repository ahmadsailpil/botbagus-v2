let handler = async m => m.reply(`
┏━━━━━━─────┈ ⳹
┃┃ ➯ 𝐒𝐀𝐌𝐀 𝐋𝐔 𝐉𝐔𝐆𝐀
┃❏━━━━━━─────────┈
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(saya|aku)$/i
handler.command = new RegExp

module.exports = handler