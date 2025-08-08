js
```javascript
// groupevents.js — A,S-MD Bot Group Updates Handler

const fs = require('fs')
const path = require('path')

module.exports = async (sock, update) => {
  const { id, participants, action } = update

  for (let user of participants) {
    let pp
    try {
      pp = await sock.profilePictureUrl(user, 'image')
    } catch {
      pp = 'https://i.ibb.co/s6snWxB/avatar.png' // default avatar
    }

    let name = (await sock.onWhatsApp(user))[0]?.notify || user.split('@')[0]
    let groupMetadata = await sock.groupMetadata(id)
    let groupName = groupMetadata.subject

    let msg = ''
    switch (action) {
      case 'add':
        msg = `🌟 *name* welcome to *{groupName}*!`
        break
      case 'remove':
        msg = `👋 *name* left *{groupName}*`
        break
      case 'promote':
        msg = `🔰 *name* is now admin in *{groupName}*!`
        break
      case 'demote':
        msg = `⚠️ *name* is no longer admin in *{groupName}*`
        break
    }

    await sock.sendMessage(id, {
      image: { url: pp },
      caption: msg
    })
  }
}
```

---
