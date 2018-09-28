const lib = require('../index')();

const WEBSITE = 'https://prague.craigslist.cz';
const SELECTOR = '#topban';

test('Attribute is successfuly parsed', async () => {
    const fetched = await lib.fetch(WEBSITE, 200);
    const attributes = fetched.gatherAttribute(SELECTOR, 'class');
    expect(attributes).toEqual(['regular']);
});

test('Inner html is successfuly fetched', async () => {
    const fetched = await lib.fetch(WEBSITE, 200);
    const text = await fetched.gatherText(SELECTOR);
    expect(text[0].indexOf('prague')).not.toBe(-1);
});