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

  const addedUser = await api
  .post("/api/login")
  .send({ username: 'fullstack', password: 'fullstack' })
  .expect(200)
  .expect('Content-type', /application\/json/)

  const newBlog = {
      title: "AMAZING",
      author: "jsrathi",
      url: "github.com/jsrathi17",
      likes: 10
  }

   const response = await api.post('/api/blogs').send(newBlog).set('Authorization',`bearer ${addedUser.body.token}`).expect(201)
  .expect('Content-Type', /application\/json/)


})

test('Testing the Like property of application', async () => {

    const addedUser = await api
    .post("/api/login")
    .send({ username: 'fullstack', password: 'fullstack' })
    .expect(200)
    .expect('Content-type', /application\/json/)

  const newBlog = {
      title: "Sanyog is Great",
      author: "slamsal",
      url: "quickmechy.com"
  }
  const response = await api.post('/api/blogs').send(newBlog).set('Authorization',`bearer ${addedUser.body.token}`).expect(201)
  .expect('Content-Type', /application\/json/)

  expect(response.body.likes).toBe(0)

}) 

test('Test missing URL and Title', async () => {
  const addUser = await api.post('/api/users')
        .send({ name: 'fullstack1', username: 'fullstack1', password: 'fullstack1' });
        const addedUser = await api
        .post("/api/login")
        .send({ username: 'fullstack1', password: 'fullstack1' })
        .expect(200)
        .expect('Content-type', /application\/json/)

  const newBlog = new Blog({
      title: "We can we will",
      author: "quickmechy",
  })
  await api.post('/api/blogs').send(newBlog).expect(400) .set('Authorization',`bearer ${addedUser.body.token}`)
  .expect(400)
  .expect('Content-Type', /application\/json/)
}) 


afterAll(() => {
  mongoose.connection.close()
})