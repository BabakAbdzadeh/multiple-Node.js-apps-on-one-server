const express = require("express");
const app = express.Router();



app.get("/show",(req,res)=>{
  res.send("This one is the second app")
});

module.exports = app;
