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

module.exports = {
    dummy, totalLikes
}