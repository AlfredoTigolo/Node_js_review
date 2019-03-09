const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/ISCC', (req, res) => res.send('Hello World from Southside!'))
app.get('/guest', (req, res) => res.send('Hello World from Southside!'))
app.get('/user/:dogs', function(req, res){
    const dogs = req.params.dogs;

    //res.send('dogs ' + req.params.dogs);
    res.send('dogs ' + dogs);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))