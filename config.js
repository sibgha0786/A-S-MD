const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "A,S-MD:~UEsDBBQAAAgIAKyqBlvFkrenZQQAAIYHAAAKAAAAY3JlZHMuanNvbpVU2ZKiSBT9lYl81ehiURYjKmJYFMENlEWZ6IcUkkXZTBIFO*z3Cayq7nqY6anhKbkk9557zzn3ByjKtEYL1IHJD1Dh9AoJ6o+kqxCYALmJIoTBEISQQDAB5yW3jpXuciuopX4IaUvDcpHCDgmuFh7ky1G2p9finJXO6BU8hqBqjlka*CahsykHzXVmwR2jMDXPzyOd7Iuadt1MJTq55+GBtWfYZbbBK3j0GWGK0yKeVgnKEYbZAnUmTPHX4Htau4osG9pKJ4lHebRyN2LtolZl3d2AmZ27gXQxd+e15ZVfgy8ui7EYMQYac3NdY47XrrY10+w2925HG+7Or5KTtMZTbf8Ov07jAoV6iAqSku7Lc9fmFIkk6NZXj9+4d+nAtdG5Vn1ncR9dcNeyySlZDTyLmh++Bjyr5jK98eTBRVaNnV1pgbvfEtxBl9vfo1JxUC6ayn17og6fgZv4Qyvn*zP3qaSLLxI9y1uBEvhFBA2+waaFvWtlRy*Y5QvKuB0876QFX4NPu3xHzblGXfB+wmLJzII4al+24sqbJS*3mUnWDm0HGqd8mjskDf4dSu6+jajp2aYGXq7qXQ5Nwwk6S1g13vrCnNoR7NbmwZz7XrRuxSrCnYxW+xm3lks54eyT4VfhIpbs1DBVKtBajtmw6e312dEZdXoIJvRjCDCK05pgSNKy6GMMMxoCGF53KMCIPMcL3MLXGS+u3UMz1vZ4u6tgvjFaN3UvQnXJ5zeFeOXSNbs2fgVDUOEyQHWNwnlakxJ3K1TXMEY1mPz1fQgK1JI34vpyLD0EUYpr4hRNlZUw*GD14yMMgrIpyK4rAqU*IAwm1K8wIiQt4rqfY1NAHCTpFSkJJDWYRDCr0c8OEUYhmBDcoJ+uVcqwHzy9nSq+ry7AEORPQtKw9xLDMgLFjsccR00Y9s*6261PC6vqW4EIGIIC9rfBarq2peUfW8kwNxsbDEH2*J0VWGY04kVeYGma7RP08cdP4H2dEBGYZjWYAGWj1HjpTKerweYuWJomHWJJiSXwq9EPxbwxQqxG24+o9dJacktfSlEVbw6D08y+DegVpRVUss0iZavenNvrPyQBExCrnOE39Gbx4tw1wvvwgjeQp*LyriITOlPRF0siyml2bGO1nLJZsT5PLf2+l0Vh3xQaf3+xl8zihkPtLiUse1parNTLawhCdE0D9LmYUtfVYFVxjRCn6NJdS3V*zTKadDnONMZyOKtzjcKIFhejENaR467UowLD8dGbl9NwRCdy63uWJ6nRqmY7g5enN+MUv2n56aXsfYelT5X1FPavUYqeK+Gdqv+k9A14rzzqMfyU433J*ItR5aOzTLLBWt1RyiBlLL24HNTcLFtHMIm9litRd*z97WwJsxV4PL4PQZVBEpU4BxNQ50cIhgCXTa9jvYjK31RSZF1XpLe2M1gT6Zc37DRHNYF5BSY0Px6N6TEjMG+3TFxWc1gnvSq3os+KvdA7qap2BJIPqwGpf5aJBR5*A1BLAQIUAxQAAAgIAKyqBlvFkrenZQQAAIYHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAI0EAAAAAA==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY A,S-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "A,S-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "A,S-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045910",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ArslanMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ArslanMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
