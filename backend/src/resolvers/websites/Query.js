function website(parent, args, context, info) {
	return context.prisma.websites({orderBy: "createdAt_DESC"});
}

module.exports = {
	website
};
