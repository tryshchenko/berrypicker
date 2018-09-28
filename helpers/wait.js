const wait = (multiplier) => new Promise((res, rej) => {
    const timeout = Math.random() * multiplier;
    setTimeout(() => {
        res();
    }, timeout);
});

module.exports = wait;