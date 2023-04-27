let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
┌─「 Donasi • Pulsa 」
│ • *Indosat:* [${global.ppulsa}]
│ • *Telkomsel:* [${global.ppulsa2}]
❏────
┌─「 Donasi • Non Pulsa 」
│ • *Dana :* [${global.pdana}]
│ • *OVO :* [${global.povo}]
│ • *GoPay :* [${global.pgopay}]
│ • *ShopeePay :* [${global.pshopeepay}]
│ • *LinkAja :* [${global.plinkaja}]
│ • *Saweria :* [${global.psaweria}]
│ • *Trakteer :* [${global.ptrakteer}]
│ • *QRIS :* [${global.pqris}]
❏────
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.? all', buttonText: {displayText: 'ʙᴀᴄᴋ ᴛᴏ ᴀʟʟ ᴍᴇɴᴜ'}, type: 1},
  {buttonId: '.ping', buttonText: {displayText: 'ᴘɪɴɢ'}, type: 1},
  {buttonId: '.creator', buttonText: {displayText: 'ᴄʀᴇᴀᴛᴏʀ'}, type: 1}
]

const templateMessage = {
    image: {url: you + 'Donasi'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
