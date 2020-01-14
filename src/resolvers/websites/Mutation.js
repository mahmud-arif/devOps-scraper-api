const getTitle = require('./utils/puppetter');
const  Queue = require('bull');
let scpQueue = new Queue('scrap queue');

scpQueue.process(async(job, done)=>{
    const title = await getTitle(job.data.url);  
    done(null, {title: title})
})

async function createWebsite(parent, args, context, info){
    const {url} = args;
    scpQueue.add({url: url,})
    scpQueue.on('completed', async(job)=>{
        let title = job.title; 
        await context.prisma.createWebsite({
            url,
            title
        })
    }) 
    scpQueue.clean(100);
}


module.exports = {
    createWebsite
  }