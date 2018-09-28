const libFactory = require('../index');
const lib = libFactory();

const fn = async () => {
    const fetched = await lib.fetch('https://prague.craigslist.cz', 200);
    const attributes = fetched.gatherAttribute('#topban', 'class');
    console.log(attributes);
}

fn();