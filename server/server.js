const path = require('path')
const express = require('express')
const cors = require('cors')
require('./models/db/connectDb')

const userRouter = require('./routes/user')
const app = express()

const PORT = process.env.PORT || 3001
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use(express.json())
app.use(cors())

app.use("/api/users", userRouter)

app.get("/api", (req, res) => {
    res.json({message: 'This is quiz app backend'})
})
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})
app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})