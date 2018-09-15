const express = require('express');  //this is like import
const app = express();  //used to route requests

app.get('/', (req, res) =>{
    res.send("Balls Deep");
});

const PORT = process.env.PORT || 5000;//this is for Heroku.  Looks for which port to listen to
app.listen(PORT);

