function newUrlSubscribe(parent, args, context, info) {
	return context.prisma.$subscribe.website({ mutation_in: [ 'CREATED' ] }).node();
}

const website = {
	subscribe: newUrlSubscribe,
	resolve: (payload) => {
		return payload;
	}
};

module.exports = {
	website
};
