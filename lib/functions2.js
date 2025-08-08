js
```javascript
// lib/functions2.js — A,S-MD GitHub Bot Version

/**
 * Format time from milliseconds to hh:mm:ss
 */
function formatTime(ms) {
  const sec = Math.floor((ms / 1000) % 60)
  const min = Math.floor((ms / (1000 * 60)) % 60)
  const hr = Math.floor((ms / (1000 * 60 * 60)) % 24)
  return `hrh{min}m secs`


/**
 * Pick a random element from an array
 */
function randomChoice(arr = []) 
  return arr[Math.floor(Math.random() * arr.length)]


/**
 * Clean text from unwanted characters
 */
function cleanText(text = ”) 
  return text.replace(/[^@._-]/gi, ”).trim()


/**
 * Simple logger with timestamp
 */
function logEvent(message) 
  const time = new Date().toLocaleTimeString('en-PK',  hour12: true )
  console.log(`[A,S-MD{time}] ${message}`)
}

/**
 * Anti-link detection
 */
function antiLink(text = '') {
  const regex = /(https?:\/\/[^\s]+|chat\.whatsapp\.com\/[^\s]+)/i
  return regex.test(text)
}

/**
 * Anti-call detection
 */
function antiCall(type = '') {
  return ['audio', 'video'].includes(type.toLowerCase())
}

/**
* Parse command from a full message
 */
function parseCommand(msg = '') {
  const prefix = ['.', '!', '/'].find(p => msg.startsWith(p)) || ''
  const [cmd, ...args] = msg.slice(prefix.length).trim().split(/\s+/)
  return {
    command: cmd?.toLowerCase() || '',
    args,
    prefix
  }
}

module.exports = {
  formatTime,
  randomChoice,
  cleanText,
  logEvent,
  antiLink,
  antiCall,
  parseCommand
}
````
