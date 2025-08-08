```javascript
const fs = require('fs');

const file = './database.json';
let data = {};

if (fs.existsSync(file)) {
  data = JSON.parse(fs.readFileSync(file));
} else {
  fs.writeFileSync(file, JSON.stringify({}));
}

module.exports = {
  get: (key) => data[key],
  set: (key, value) => {
    data[key] = value;
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
  },
  delete: (key) => {
    delete data[key];
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
  },
  all: () => data
};
```
