```javascript
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const isUrl = (string) => {
  const pattern = new RegExp('^(https?:\\/\\/)?'+
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}'+
    '|((\1̣,̣3̣\\.){3}\1̣,̣3̣))'+
    '(\\:\\d+)?(\\/[-a-z\\d%@_.~+&:]*)*'+
    '(\\?[;&a-z\\d%@_.,~+&:=-]*)?'+
    '(\\#[-a-z\\d_]*)?','i');
  return !!pattern.test(string);
;

const getRandom = (ext = ”) => `{Math.floor(Math.random() * 10000)}ext`;

const formatTime = (ms) => 
  const sec = Math.floor((ms / 1000) 
  const min = Math.floor((ms / (1000 * 60)) 
  const hr = Math.floor((ms / (1000 * 60 * 60)) 
  return `{hr}h minm{sec}s`;
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

module.exports = {
  delay,
  isUrl,
  getRandom,
  formatTime,
  capitalize,
  randomElement
};
```
