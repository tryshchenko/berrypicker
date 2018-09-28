const request = require('request').defaults({ jar: true });

const takeImage = (url, filename, userAgent) => new Promise((resolve, reject) => {
    const options = {
        url,
        headers: {
            'User-Agent': userAgent
        }
    };
    request(options).pipe(fs.createWriteStream(filename)).on('close', resolve);
});

module.exports = takeImage;