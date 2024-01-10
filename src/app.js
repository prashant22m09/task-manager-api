const express = require('express')
require('./db/mongoose')
const userRoutes = require('./routers/users')
const taskRoutes = require('./routers/tasks')

const app = express()

app.use(express.json())
app.use(userRoutes)
app.use(taskRoutes)

module.exports = app