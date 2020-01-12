function websites(parent, args, context, info){
    return context.prisma.websites(); 
}


module.exports = {
    websites
  }