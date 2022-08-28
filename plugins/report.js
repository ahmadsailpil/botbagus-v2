let handler = async(m, { conn, text }) => {
    if (!text) throw 'Silahkan masukkan laporan'
    if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!'
    const laporan = `*「 REPORT 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6283160327945@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('|💬|Masalah telah di laporkan ke Owner Bot, laporan palsu/main2 tidak akan ditanggapi!')
}

    })
    conn.sendMessage(m.chat, {
    	react: {
    		text: "🆗",
    		key: m.key
    	}
    })	
    conn.send2ButtonLoc(m.chat, 'https://telegra.ph/file/5cd3cc7381bce4a4a65ec.jpg',`Masalah telah di laporkan ke @${global.owner[0].split('@')[0]}, jika ${command.toLowerCase()} hanya main-main tidak akan ditanggapi.`, wm, 'Owner', '.owner', 'Menu', '.menu', m)
}
handler.help = ['report', 'request'].map(v => v + '<text>')
handler.tags = ['info']
handler.command = /^(report|request)$/i
handler.limit = true
handler.private = false

module.exports = handler
