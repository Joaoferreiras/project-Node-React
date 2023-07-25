
const express = require('express')
const uuid = require('uuid')
const cors = require('cors')

const app = express()
const port = 3001
app.use(express.json())
app.use(cors())


const users = []
const checkUserId = (request, response, next) => {
    const { id } = request.params

    const index = users.findIndex(user => user.id === id)

    if (index < 0) {
        return response.status(400).json({ "message": "User not found" })
    }

    request.userIndex = index
    request.userId = id

    next()
}

app.get('/orders', (request, response) => {

    return response.json(users)
})

app.post('/orders', (request, response) => {
    const { name, order } = request.body
    const user = { id: uuid.v4(), name, order }

    users.push(user)

    return response.status(201).json(user)
})

app.put('/users/:id', checkUserId, (request, response) => {
    const { name, age } = request.body
    const index = request.userIndex
    const id = request.userId
    const updateUser = { id, name, age }

    users[index] = updateUser

    return response.json(updateUser)
})

app.delete('/orders/:id', checkUserId, (request, response) => {
    const index = request.userIndex
   
    users.splice(index, 1)

    return response.status(204).json()


})

app.listen(port, () => {
    console.log(`✅ server started on port ${port}`)
})