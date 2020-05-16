const { GraphQLServer } = require('graphql-yoga');
// prisma instance 
const { prisma } = require('./generated/prisma-client');

// import resolver 
const Query = require('./resolvers/websites/Query');
const Mutation = require('./resolvers/websites/Mutation');
const Subscription = require('./resolvers/websites/Subscription');

const resolvers = {
	Query,
	Mutation,
	Subscription
};

// setup graphql server
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
