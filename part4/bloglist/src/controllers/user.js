const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const Logger = require("../utils/logger")

usersRouter.post('/', async (request, response) => {
  const body = request.body
  if( !body.password || body.password.length < 3 ){
    Logger.info("Password's length must be more than 3")
    response.status(400)
    response.json({error: "Password's length must be more than 3"})
}
else{
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  })

  const savedUser = await user.save()

  response.json(savedUser)
}
})

usersRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('blogs', {title:1, author:1, url:1})
    response.json(users)
  })

module.exports = usersRouter