const mongoose = require("mongoose");
const express = require("express")

var bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/newsDB")
   .then((res)=> {
    console.log("database is connected")
   })
   .catch((err)=> {
    console.log("disconnected")
   })

const port = 4000;

const categoryRoute = require("./src/route/category.route")
app.use("/category", categoryRoute)

//news
const newsRoute = require("./src/route/news.route")
app.use("/news", newsRoute)

app.listen(port, function (){
    console.log("server is running on port", port)
})