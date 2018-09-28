const fs = require('fs');

const checkDir = (dir) => {
	if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        return false;
    }
    return true;
};

module.exports = checkDir;