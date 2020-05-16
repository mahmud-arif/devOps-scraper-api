function website(parent, args, context, info) {
  // return all websites from data base 
	return context.prisma.websites({orderBy: "createdAt_DESC"});
}

module.exports = {
	website
};
