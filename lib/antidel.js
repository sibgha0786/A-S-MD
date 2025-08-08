```javascript
const {
  smsg,
  getContentType
} = require('./functions');

module.exports = {
  name: 'antidel',
  description: 'Auto detect and log deleted messages.',
  async handler(sock, msg, store) {
    const contentType = getContentType(msg.message);
    if (msg.messageStubType === 68) {
      const key = msg.key;
      const chat = key.remoteJid;
      const sender = key.participant || key.remoteJid;
      const deletedMsg = store.messages[chat]?.get(key.id);

      if (deletedMsg) {
        await sock.sendMessage(chat, {
          text: `⚠️ *Message deleted by:* @sender.split('@')[0]{smsg(deletedMsg)}`
        }, {
          quoted: msg,
          mentions: [sender]
        });
      }
    }
  }
};
```
