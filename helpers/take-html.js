const request = require('request').defaults({ jar: true });

const takeHtml = (url, cookie, userAgent) => new Promise((res, rej) => {
	const options = {
		url,
		headers: {
			'User-Agent': userAgent
		}
	};

	if (cookie) {
		options.headers.Cookie = cookie;
	}

	request(options, (error, response, body) => {
		if (error) {
			rej(error, response);
		}
		res(body);
	});
});

module.exports = takeHtml;
