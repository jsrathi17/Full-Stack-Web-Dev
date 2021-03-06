const lodash = require('lodash')

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


const mostBlogs = (blogs) => {

  if (blogs.length === 0) {
    return null
  }

  let authorsByMostBlogs = lodash.countBy(blogs, "author")
  console.log(authorsByMostBlogs)
  const numberOfBlogs = Object.values(authorsByMostBlogs).sort((a, b) => b - a)
  const mostBlogsAuthor = Object.keys(authorsByMostBlogs).sort(
    (a, b) => authorsByMostBlogs[b] - authorsByMostBlogs[a]
  )

  const authorOfMostBlogs = { 
    author: mostBlogsAuthor[0],
    blogs: numberOfBlogs[0]
  }

  return authorOfMostBlogs
}

const mostLikes = (blogs) => {
  const authors = lodash.reduce(blogs, function(result, blog){
      if (result[blog.author]){
          result[blog.author] += blog.likes
      }
      else
          result[blog.author] = 0 + blog.likes
      return result
  },{})
  let authorsobject = []
  lodash.forIn(authors, function(value, key){
    authorsobject=authorsobject.concat({
          author: key,
          likes: value
      })
  })
  authorsobject.sort((author1,author2) => author2.likes - author1.likes)
  return authorsobject[0]
}




module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}