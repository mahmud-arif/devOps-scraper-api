const Queue = require('bull');

const getTitle = require('./utils/puppetter');
const { prisma } = require('../../generated/prisma-client');

let scpQueue = new Queue('scrap queue');

scpQueue.process(async (job, done) => {
	const {url} = job.data;
	const title = await getTitle(job.data.url);
	await prisma.createWebsite({
		url,
		title
	});
	done(null, { title: title });
});

async function createWebsite(parent, args, context, info) {
	const { url } = args;
	scpQueue.add({ url });
	scpQueue.clean(100);
}

module.exports = {
	createWebsite
};
