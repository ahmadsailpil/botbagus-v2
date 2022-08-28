const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let handler = async (m, { conn, usedPrefix: _p }) => {
const anjg = `
*-------「 BUY DL & SELL DL 」 -------*

SILAHKAN PILIH KAK MAU SELL DL ATAU BUY DL KAK 100% TRUSTED KOK

Thanks!`
const upt = `BOT Active During ${uptime}`
 let url = `https://telegra.ph/file/5cd3cc7381bce4a4a65ec.jpg`
let res = await fetch(url)
let buffer = await res.buffer()
let message = await prepareWAMessageMedia({ image: buffer }, { upload: conn.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anjg.trim(),
                            hydratedFooterText:upt,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝐒𝐄𝐋𝐋 𝐃𝐈𝐀𝐌𝐎𝐍𝐃 𝐋𝐎𝐂𝐊',
                                    url: 'http://wa.me/6283160327945?text=kak+sell+dl'
                                }
                            }, {
                                urlButton: {
                                    displayText: '𝐁𝐔𝐘 𝐃𝐈𝐀𝐌𝐎𝐍𝐃 𝐋𝐎𝐂𝐊',
                                    url: 'http://wa.me/6283160327945?text=kak+buy+dl'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Back To Menu',
                                    id: 'buy dl'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                conn.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^pilihanstore$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}