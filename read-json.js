const fs = require('fs');

const readJson = (file, encoding = 'utf-8') => JSON.parse(fs.readFileSync(file, encoding));

module.exports = readJson;