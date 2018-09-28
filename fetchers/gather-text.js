const gatherText = ($) => (selector) => {
	const stack = [];
	$(selector).each(function () {
		stack.push($(this).text());
	});
	return stack;
};

module.exports = gatherText;
