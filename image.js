const { DEFAULT_USER_AGENT } = require('./constants');
const checkDir = require('./helpers/check-dir.js');

const imageOf = ({ globalUserAgent }) => async (image, location, filename, userAgent) => {
	userAgent = userAgent || globalUserAgent || DEFAULT_USER_AGENT;
	checkDir(location);
	await download(image, location + '/' + filename);
}

module.exports = imageOf;