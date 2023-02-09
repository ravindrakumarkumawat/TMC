const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3001
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use(express.json())
app.use(cors())


app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})