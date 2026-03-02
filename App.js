const express = require('express');
const chalk = require('chalk');
const app = express();
const morgan = require('morgan');
const port = 3000;
const path = require('path');


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));
app.get("/", (req,res) =>{

    res.send('Hello Guy');

})

app.listen(port, () => {
    console.log("Listening on port port" + chalk.green(' ' + port));
})