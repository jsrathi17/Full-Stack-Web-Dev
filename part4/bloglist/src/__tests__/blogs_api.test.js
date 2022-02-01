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


afterAll(() => {
  mongoose.connection.close()
})