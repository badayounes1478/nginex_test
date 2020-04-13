const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('<h1>Yahooo its working</h1>')
})

app.listen(4000,()=>{
    console.log('listening')
})