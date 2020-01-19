const Queue = require("bull");

// setting up  redis
// const redis = {
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
//   password: process.env.REDIS_PASS
// }

let scpQueue = new Queue("scrape queue");

let mutationQueue = new Queue("Mutation Queue");

const getTitle = require("./utils/puppetter");

// process scpQueue which job added in the backend mutation
scpQueue.process(async job => {

  const { url } = job.data;
  const title = await getTitle(job.data.url);

  // add new job for mutationQueue
  mutationQueue.add({ url, title });
  return true;
});
