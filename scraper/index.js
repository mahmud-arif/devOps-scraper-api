const Queue = require("bull");
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

const getTitle = require("./utils/puppetter");

scpQueue.process(async job => {
  const { url } = job.data;
  const title = await getTitle(job.data.url);
  mutationQueue.add({ url, title });
  return true;
});
