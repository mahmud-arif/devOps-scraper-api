const Queue = require('bull');
const { prisma } = require('../../generated/prisma-client');

// redis setting
// const redis = {
// 	host: process.env.REDIS_HOST,
// 	port: process.env.REDIS_PORT,
// 	password: process.env.REDIS_PASS
// };

// create new queue
let scpQueue = new Queue('scrape queue');

let mutationQueue = new Queue('Mutation Queue');

// mutationQueue process which job added in scraper module
mutationQueue.process(async (job) => {
	const { url, title } = job.data;
	return prisma.createWebsite({
		url,
		title
	});
});

async function createWebsite(parent, args, context, info) {
	const { url } = args;
	// add job in scpQueue
	scpQueue.add({ url });
}

module.exports = {
	createWebsite
};
