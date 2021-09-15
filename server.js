const express = require("express");
const app = express();
const port = 3000;
const drinks = require("./models/drinks");
const foods = require("./models/foods");

app.get("/", (req, res)=>{
    res.send("Welcome to the Github App!")
})

app.get("/drinks", (req, res)=>{
    res.render("drinks_index.ejs", {allDrinks: drinks })
})

app.get("/drinks/:id", (req, res)=>{
    res.render("drinks_show.ejs", {drink: drinks[req.params.id]})
})

app.get("/foods", (req, res)=>{
    res.render("foods_index.ejs", {allFood: foods })
})

app.get("/foods/:id", (req, res)=>{
    res.render("foods_show.ejs", {food: foods[req.params.id] })
})

app.listen(port, ()=>{
    console.log("It is listening...")
})

