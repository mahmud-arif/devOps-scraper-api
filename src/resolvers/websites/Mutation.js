const getTitle = require('./utils/puppetter');
const { prisma } = require('../../generated/prisma-client');

const  Queue = require('bull');
let scpQueue = new Queue('scrap queue');

scpQueue.process(async(job, done)=>{
    let url = job.data.url
    const title = await getTitle(job.data.url); 
    await prisma.createWebsite({
            url,
            title
        }) 
    done(null, {title: title})
})

async function createWebsite(parent, args, context, info){
    const {url} = args;
    scpQueue.add({url: url,})
    scpQueue.clean(100);
}


module.exports = {
    createWebsite
  }