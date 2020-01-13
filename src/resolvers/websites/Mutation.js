const getTitle = require('./utils/puppetter');


async function createWebsite(parent, args, context, info){
    const {url} = args;
    const title = await getTitle(url);  
    return await context.prisma.createWebsite({
        url,
        title
    })
}


module.exports = {
    createWebsite
  }