const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const categoriesController = require("./categories/categoriesController");
const articlesController = require("./articles/articlesController");

const Article = require("./articles/Article");
const Category = require("./categories/category");







app.set('view engine', 'ejs');


app.use(express.static('public'));


app.get("/", (req, res) =>{
    res.render("Index")
})


app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

connection
    .authenticate().then(()=>{
        console.log("sucesso db")
    }).catch((e) =>{console.log(e)})

app.use("/", categoriesController);

app.use("/",articlesController);
    

app.listen(8080, () =>{
    console.log("rodando");
})