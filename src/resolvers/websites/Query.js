function website(parent, args, context, info){
    return context.prisma.websites(); 
}


module.exports = {
    website
  }