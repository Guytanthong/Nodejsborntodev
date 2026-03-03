const express = require('express');
const chalk = require('chalk');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT;
const path = require('path');
const productRouter = express.Router();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));
app.set("views", "./src/views");
app.set("view engine", "ejs")


productRouter.route("/").get((req, res) => {
    res.render("products", {
        products: [
            {productTitle: 'Fender Stratocaster', productDescription: 'Fender player series'},
            {productTitle: 'Fender Telecaster', productDescription: 'Fender player series'},
            {productTitle: 'Fender Jazzmaster', productDescription: 'Fender player series'},
        ]
    });
});

productRouter.route("/1").get((req, res) => {
    res.send("Hello world Im Products1");
});


app.use("/products", productRouter)
app.get("/", (req,res) =>{

    res.render('index', {username: 'Guy', customer: ["git","ddd","jae"]});

})

app.listen(port, () => {
    console.log("Listening on port" + chalk.green(' ' + port));
})