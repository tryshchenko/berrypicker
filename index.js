const fetch = require('./fetch');
const imageFrom = require('./image');
const readJson = require('./read-json');
const writeJson = require('./write-json');
const wait = require('./helpers/wait');
const checkDir = require('./helpers/check-dir');

module.exports = (options = {}) => ({
	fetch: fetch(options),
	imageFrom: imageFrom(options),
	json: {
		from: readJson,
		to: writeJson
	},
	helpers: {
		wait,
		checkDir
	}
});