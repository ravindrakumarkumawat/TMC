const bcrypt = require('bcrypt')

const generateHashPassword = async (password) => bcrypt.hash(password, await bcrypt.genSalt())

const comparePassword = async (password, userPassword) => bcrypt.compare(password, userPassword)

module.exports = { generateHashPassword, comparePassword }