const mongoose = require("mongoose")
const { generateHashPassword, comparePassword } = require('../utils/generateHashPassword')
const { createJWTToken } = require('../libs/auth')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registeredOn: {
    type: Date,
    default: Date.now,
  },
})

const Usertmc = mongoose.model("Usertmc", userSchema)


const register = async (req) => {
  const {
    username,
    password,
  } = req.body

  try {
    const passwordHash = await generateHashPassword(password)
    
    const user = await Usertmc.create({
      username,
      password: passwordHash,
    })

    const payload = { id: user._id }
    const accessToken = createJWTToken(payload)

    return { user, accessToken }
  } catch (err) {
    return { error: err.message }
  }
}

const login = async (req) => {
  const { username, password } = req.body

  try {
    if (!username || !password) {
      return { 
        message: !username && password ? 'Enter registered username' : username && !password ? 'Enter password' : 'Enter username and password'
      }
    }

    const user = await Usertmc.findOne({ username })
    
    if(!user) {
      return { message: 'Username is not registered' }
    }
    
    const isMatch = await comparePassword(password, user.password)
    
    if (!isMatch) {
      return { message: 'Incorrect Password' }
    }

    const payload = { id: user._id }
    const accessToken = createJWTToken(payload)

    return { user, accessToken}
  } catch (err) {
    return { error: err.message }
  }
}

module.exports = {
  register,
  login,
}
