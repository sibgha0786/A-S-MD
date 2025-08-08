js
```javascript
// lib/msg.js — A,S-MD Message Utilities

/**
 * Simple text reply
 */
const reply = async (sock, jid, text, quoted = null) => {
  await sock.sendMessage(jid, { text }, { quoted })
}

/**
 * Button message
 */
const sendButton = async (sock, jid, text, footer, buttons, quoted = null) => {
  await sock.sendMessage(jid, {
    text,
    footer,
    buttons,
    headerType: 1
  }, { quoted })
}

/**
 * Mention format
 */
const formatMention = (text, users = []) => {
  return {
    text,
    mentions: users
  }
}

/**
 * Send image with caption
 */
const sendImage = async (sock, jid, imageUrl, caption, quoted = null) => {
  await sock.sendMessage(jid, {
    image: { url: imageUrl },
    caption
  }, { quoted })
}

/**
 * Send audio
 */
const sendAudio = async (sock, jid, audioUrl, ptt = false, quoted = null) => {
  await sock.sendMessage(jid, {
    audio: { url: audioUrl },
    mimetype: 'audio/mpeg',
    ptt
  }, { quoted })
}

/**
 * Send document
 */
 const sendDocument = async (sock, jid, docUrl, fileName, mimetype, quoted = null) => {
  await sock.sendMessage(jid, {
    document: { url: docUrl },
    fileName,
    mimetype
  }, { quoted })
}

/**
 * Send sticker
 */
const sendSticker = async (sock, jid, stickerUrl, quoted = null) => {
  await sock.sendMessage(jid, {
    sticker: { url: stickerUrl }
  }, { quoted })
}

module.exports = {
  reply,
  sendButton,
  formatMention,
  sendImage,
  sendAudio,
  sendDocument,
  sendSticker
}
```
