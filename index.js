const express = require('express');
const app = express();

app.name = "AppTest"

app.get('/', (req, res)=>{
    res.send("<h1>Dockerizando Node. Js</h1>")
})

app.listen(3000)