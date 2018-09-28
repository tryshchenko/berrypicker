const fs = require('fs');
const checkDir = require('./helpers/check-dir');

const writeJson = (file, dir, encoding = 'utf-8') => {
    checkDir(DIR);
    fs.writeFileSync(`${dir}/${file}`, JSON.stringify(data), 'utf-8');
};

module.exports = writeJson;