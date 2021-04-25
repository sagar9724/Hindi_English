const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

// const fetch = require("../public/js/fetch")
// const fs = require("fs");
const port = process.env.PORT || 80;

// require("./db/conn");
const publicPath = path.join(__dirname,"../public")
// console.log(publicPath);
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");

app.use(express.json());

app.use(express.urlencoded({extended:false}))
// console.log(templatePath);
app.set("view engine","hbs");


app.use(express.static(publicPath));

app.set("views",templatePath);


hbs.registerPartials(partialPath);


app.get("/",(req,res)=>{
    
    res.render("index");
    
})

app.post("/",(req,res)=>{

    const english = req.body.english;
    const num = req.body.num;
    let score = req.body.score;
    const engData = data[num].eng.toLowerCase();
    console.log(engData);
    if(engData==english)
    {   const rand = Math.random()*18;
        const num = Math.floor(rand);
        const hindi = data[num].hindi;
        score++;
        res.render("index",{hindi,num,score});
        
    }
    else{
        
        res.send("Wrong answer");
    }

})


app.listen(port,()=>{
    console.log(`App is listening at the port ${port}`);
})