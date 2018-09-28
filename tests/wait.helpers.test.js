const wait = require('../helpers/wait');

test('Waiting function does not take more than max time', async () => {
    const start = Date.now();
    await wait(500);
    expect(Date.now() - start).toBeLessThan(501);
});