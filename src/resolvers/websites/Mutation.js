function createWebsite(parent, args, context, info){
    const {url, title} = args; 
    return context.prisma.createWebsite({
        url,
        title
    })
}


module.exports = {
    createWebsite
  }