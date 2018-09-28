const gatherAttribute = ($) => (selector, attribute) => {
	const stack = [];
	$(selector).each(function () {
		stack.push($(this).attr(attribute));
	});
	return stack;
};

module.exports = gatherAttribute;
