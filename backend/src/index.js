const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const Query = require('./resolvers/websites/Query');
const Mutation = require('./resolvers/websites/Mutation');
const Subscription = require('./resolvers/websites/Subscription');

const resolvers = {
	Query,
	Mutation,
	Subscription
};

const server = new GraphQLServer({
	typeDefs: './src/schema.graphql',
	resolvers,
	context: (request) => {
		return {
			...request,
			prisma
		};
	}
});
server.start({port: process.env.BACKEND}, () => console.log(`Server is running on http://localhost:4000`));
