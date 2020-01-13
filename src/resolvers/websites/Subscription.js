function newUrlSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.website({ mutation_in: ['CREATED'] }).node()
  }
  

  const newUrl = {
	subscribe: newUrlSubscribe,
	resolve: (payload) => {
		return payload;
	}
};


module.exports = {
	newUrl
};
