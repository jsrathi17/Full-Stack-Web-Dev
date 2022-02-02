const blogRouter = require('express').Router()
const Blog = require('../models/blogs')
const User = require('../models/user')
blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', {username:1, name:1})
  response.json(blogs)
})

blogRouter.post('/', async (request, response) => {
  const body = request.body
  const user = await User.findById(body.userId)
  if (!body.title || !body.url)
  return response.status(400).json({ error: 'title or url is missing' })

  let blog = undefined
  if(body.likes === undefined){
    blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: 0,
      id: body.id,
      user: user._id
    })
  } else {
    blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      id: body.id,
      user: user._id
    })
  }
  const result = await blog.save()
  user.blogs = user.blogs.concat(result._id)
  await user.save()
  response.status(201).json(result)
})

blogRouter.delete('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)
  if(blog){
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  }
})

blogRouter.put('/:id', async (request, response) => {
  const body = request.body
  const blogObject = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  }

  const newBlog = await Blog.findByIdAndUpdate(request.params.id, blogObject, { new: true })
  response.json(newBlog)
  response.status(200).end()
})





module.exports = blogRouter