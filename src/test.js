// const  Queue = require('bull');
// let scraperQueue = new Queue('scrap queue');
// const scrapper = require('./resolvers/websites/utils/puppetter'); 

// scraperQueue.process(async(job, done)=>{
//     // return 'Hello world';
//     // console.log(job.data.url)
//     const title = await scrapper(job.data.url);  
//     // return await context.prisma.createWebsite({
//     //     url,
//     //     title
//     // })
//     // console.log(title)
//     // done()
//     return title
// })
// scraperQueue.on('completed', async(job, result)=>{
//     console.log(jobs); 
// })

// scraperQueue.add({url: "https://reactjs.org"})

