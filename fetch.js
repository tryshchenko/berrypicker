const cheerio = require('cheerio');
const fs = require('fs');
const { DEFAULT_USER_AGENT } = require('./constants');
const take = require('./helpers/take-html');
const gatherAttribute = require('./fetchers/gather-attribute');
const gatherText = require('./fetchers/gather-text');
const wait = require('./helpers/wait');

const fetchFn = ({
	enableDebugHtml,
	debugHtmlPath,
	defaultCookie,
	globalUserAgent,
}) => async (url, multiplier, cookie, userAgent) => {
	userAgent = userAgent || globalUserAgent || DEFAULT_USER_AGENT;
	const time = await wait(multiplier);
	const body = await take(url, cookie, userAgent);
	const $ = cheerio.load(body);

	if (enableDebugHtml) {
		fs.writeFileSync('./debug.html', body, 'utf-8');
	}

	return {
		eject: () => $,
		get: (what) => $(what),
		gatherAttribute: gatherAttribute($),
		gatherText: gatherText($)

	}
}

module.exports = fetchFn;