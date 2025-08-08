js
```javascript
// index.js — A,S-MD WhatsApp Bot

const { default: makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const path = require('path')

const functions2 = require('./lib/functions2')
const groupEvents = require('./lib/groupevents')

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./session')

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
      const shouldReconnect = (lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut)
      console.log('Connection closed. Reconnecting:', shouldReconnect)
      if (shouldReconnect) startBot()
    } else if (connection === 'open') {
      console.log('✅ A,S-MD is now connected.')
    }
  })

  // Group Events
  sock.ev.on('group-participants.update', async (update) => {
    await groupEvents(sock, update)
  })

  // Message Handler
  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return
    const m = messages[0]
    if (!m.message || m.key.fromMe) return

    const msg = m.message.conversation || m.message.extendedTextMessage?.text || ''
    const { command, args } = functions2.parseCommand(msg)

    if (!command) return

    switch (command) {
      case 'ping':
        await sock.sendMessage(m.key.remoteJid, { text: '🏓 A,S-MD is alive!' }, { quoted: m })
        break

      case 'help':
        await sock.sendMessage(m.key.remoteJid, { text: '🤖 Commands: ping, help' }, { quoted: m })
        break

      default:
        await sock.sendMessage(m.key.remoteJid, { text: '❌ Unknown command.' }, { quoted: m })
    }
  })
}

startBot()
```
