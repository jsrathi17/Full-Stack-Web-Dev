const dummy = (blogs) => {
    return 1
  }

  const totalLikes = (blogs) => {
    let likes = 0
    blogs.forEach(element => {
        likes = likes + element.likes
    });
    return likes
}


const favoriteBlog = (blogs) => {
  let fab = blogs[0]
  blogs.forEach(blog => {
      if(fab.likes < blog.likes){
          fab = blog
      }
  })
  return fab
}


module.exports = {
    dummy, totalLikes, favoriteBlog
}