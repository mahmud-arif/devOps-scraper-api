const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const Query = require('./resolvers/websites/Query'); 
const Mutation = require('./resolvers/websites/Mutation'); 

const resolvers = {
    Query, 
    Mutation
}

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
server.start(() => console.log(`Server is running on http://localhost:4000`));