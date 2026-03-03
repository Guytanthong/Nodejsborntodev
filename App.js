const express = require('express');
const chalk = require('chalk');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT;
const path = require('path');


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));
app.set("views", "./src/views");
app.set("view engine", "ejs")

app.get("/", (req,res) =>{

    res.render('index', {username: 'Guy', customer: ["git","ddd","jae"]});

})

app.listen(port, () => {
    console.log("Listening on port" + chalk.green(' ' + port));
})