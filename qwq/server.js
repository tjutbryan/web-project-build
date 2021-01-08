const express = require('express')
const bcrypt = require('bcrypt')
const app = express()

app.use(express.json())
const users = []

app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try {
        const password = await bcrypt.hash(req.body.password, 10)
        const user = { name : req.body.name, password: password }
        users.push(user)
        res.status(201).send()    
    } catch {
        res.status(501).send()
    }  
})

app.post('/users/login', (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if (user === null){
        res.send('cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('success')
        } else {
            res.send('not allowed')
        }
    } catch {
        res.status(500).send()
    }
})