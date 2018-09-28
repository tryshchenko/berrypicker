const checkDir = require('../helpers/check-dir');
const fs = require('fs');

// In good scenario dirrectory shouldn't exist
try {
  fs.rmdirSync('./$test-non-existing-folder');
} catch (err) {
    console.log('Previous test ended correctly');
}

test('Existing dir can be checked', async () => {
    expect(checkDir('./$test-folder')).toBe(true);
});

test('Non-existing dir can be checked and created after the check', async () => {
    expect(checkDir('./$test-non-existing-folder')).toBe(false);
    expect(checkDir('./$test-non-existing-folder')).toBe(true);
    fs.rmdirSync('./$test-non-existing-folder');
});