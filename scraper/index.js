const Queue = require("bull");
const redis = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASS
}
let scpQueue = new Queue("scrape queue", {
  redis
});

let mutationQueue = new Queue("Mutation Queue", {
 redis
});

const getTitle = require("./utils/puppetter");

scpQueue.process(async job => {
  const { url } = job.data;
  const title = await getTitle(job.data.url);
  mutationQueue.add({ url, title });
  return true;
});
