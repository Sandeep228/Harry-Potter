const path = require('path')
const express = require('express')
const publicDirectoryPath = path.join(__dirname, '../public')
const hat = require('../harryhouse')
const app = express()
app.use(express.static(publicDirectoryPath))


app.get('/house', (req,res) => {
    if(!req.query.name) {
        return res.send({
            error: 'You must provide a name'
        })
    }
    else {
        hat(sortinghat => {
               res.send({
                   house: sortinghat,
                   name:req.query.name
                })
        })
    }
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})