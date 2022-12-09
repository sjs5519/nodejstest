const express = require('express')
var  cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sound/:name', function (req, res) {
    const {name} = req.params
    console.log(name)

    if(name == 'dog'){
        res.json({'sound':'멍멍'})
    } else if(name == 'cat') {
        res.json({'sound':"야옹"})
    } else {
        res.json({'sound':'unknown'})
    }    
})


// app.get('user/:id', (req, res) => {
//     const q = req.query
//     console.log(q)
// })

app.listen(5500, () => {
    console.log("listening port 5500 >>>")
})