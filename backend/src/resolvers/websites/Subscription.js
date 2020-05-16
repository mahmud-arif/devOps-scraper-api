function newUrlSubscribe(parent, args, context, info) {
  // return newlly created url and title to the client
	return context.prisma.$subscribe.website({ mutation_in: [ 'CREATED' ] }).node();
}

// create subscription for any url and title add in database
const website = {
	subscribe: newUrlSubscribe,
	resolve: (payload) => {
		return payload;
	}
};

module.exports = {
	website
};
