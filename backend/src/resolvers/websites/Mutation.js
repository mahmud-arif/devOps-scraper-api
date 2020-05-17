const Queue = require("bull");
const { prisma } = require("../../generated/prisma-client");

let scpQueue = new Queue("scrape queue", {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASS
  }
});

let mutationQueue = new Queue("Mutation Queue", {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASS
  }
});

mutationQueue.process(async job => {
  const { url, title } = job.data;
  return prisma.createWebsite({
    url,
    title
  });
});

async function createWebsite(parent, args, context, info) {
  const { url } = args;
  scpQueue.add({ url });
}

module.exports = {
  createWebsite
};
