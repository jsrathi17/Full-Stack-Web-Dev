const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const supertest = require("supertest")
const user_helper = require("../utils/user_helper")
const app = require("../app")
const api = supertest(app)
const User = require('../models/user')

//...

describe('checking functionality of user', () => {
  beforeEach(async () => {
    await User.deleteMany({})
    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })
    await user.save()
  })

  test('creation succeeds with a fresh username', async () => {
    const userOne = await user_helper.usersList()

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const userTwo = await user_helper.usersList()
    expect(userTwo).toHaveLength(userOne.length + 1)

    const usernames = userTwo.map(u => u.username)
    expect(usernames).toContain(newUser.username)
  })



test('POST Request fails with proper statuscode and message if username has length smaller than 3', async () => {
    const userOne = await user_helper.usersList()

    const newUser = {
      username: 'r',
      name: 'Superuser',
      password: 'salainen',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)


    const userTwo = await user_helper.usersList()
    expect(userTwo).toHaveLength(userOne.length)
  }, 1000000)
})