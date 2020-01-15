const Queue = require("bull");
let scpQueue = new Queue("scrape queue");
let mutationQueue = new Queue("Mutation Queue");

const getTitle = require("./utils/puppetter");

scpQueue.process(async job => {
  const { url } = job.data;
  const title = await getTitle(job.data.url);
  mutationQueue.add({ url, title });
  return true;
});
