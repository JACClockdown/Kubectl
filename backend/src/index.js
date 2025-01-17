const express = require("express");
const app = express();
const conexionDB = require('../config/db')
const Users = require('../models/Users')


conexionDB

app.get("/", async function(req, res) {
    
    const users = await Users.findAll();
        
    if(!users){
        throw new Error('No Data')
    }

    res.json(users)
    
});

const port = process.env.PORT || 3000;

app.listen(3000, function(){
    console.log(`Server in url http://localhost:${port}`);
});