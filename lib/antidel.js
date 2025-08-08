```js
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

```js
const { smd } = require('../lib');

smd({
  on: "message_update",
  fromMe: false,
  async run({ msg, update }) {
    try {
      if (!update.message) return;

      const oldMsg = await msg.bot.serializeM(update);
      if (!oldMsg || !oldMsg.body) return;

      const chat = update.key.remoteJid;
      const participant = update.key.participant || update.participant;
      const name = msg.pushName || "Someone";

      await msg.reply(
        `*🧨 Anti-Delete Triggered 🧨*\n\n👤: name🗑️ Deleted Message:{oldMsg.body}`,
        chat
      );
    } catch (e) {
      console.log("Anti-Delete Error: ", e);
    }
  },
});
```
