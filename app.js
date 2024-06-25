const express = require("express");

const app = express();

app.use(express.json());

app.listen(
    8080, 
    () => console.log(`app is running on http://localhost:${8080}`)
)

app.get('/tasks', (req, res, next) =>{
    if(req.query.filter == 'bydate'){
        console.log('here')
    }

    res.send({response:'Hello World'})
})
console.log('Here')
console.log('Here')
console.log('Here')