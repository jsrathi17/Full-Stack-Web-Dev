const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blogs')
const api = supertest(app)
const BlogsList = require("../utils/blogs_helper")

/* making sure that every test starts with the same point */
beforeEach(async () => {
    await Blog.deleteMany({})
    for(let blog of BlogsList.listWithMultipleBlogs){
      let blogObject = new Blog(blog)
      await blogObject.save()
    }
}, 100000) 

/* test of GET request to blog api */
test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  }, 100000)

  test('all notes are returned', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(BlogsList.listWithMultipleBlogs.length)
  })
  
  test('Checking unique identifier property for id', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
    expect(response.body[0]._id).not.toBeDefined()
})

test('HTTP POST to /api/blogs works', async () => {
  let response = await api.get('/api/blogs')
  const initialNumber = response.body.length
  expect(initialNumber).toBe(BlogsList.listWithMultipleBlogs.length)
  const newBlog = new Blog({
      title: "Shark Tank is OKAY",
      author: "jsrathi",
      url: "github.com/jsrathi17",
      likes: 10
  })
  await newBlog.save()
  response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(initialNumber+1)
})

test('Testing the Like property of application', async () => {
  const newBlog = {
      title: "Sanyog is Great",
      author: "slamsal",
      url: "quickmechy.com"
  }
  const response = await api.post('/api/blogs').send(newBlog)
  expect(response.body.likes).toBe(0)

}) 

test('Test missing URL and Title', async () => {
  const newBlog = new Blog({
      title: "We can we will",
      author: "quickmechy",
  })
  await api.post('/api/blogs').send(newBlog).expect(400)
}) 


afterAll(() => {
  mongoose.connection.close()
})