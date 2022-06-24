const express = require("express");
const app = express();


app.get("/", (req,res)=>{
  res.send("Hello world!");
});




app
.use('/app1', require('./appList/app1'))
.use('/app2', require('./appList/app2'))
.listen(3000, ()=>{
  console.log('Successfuly connected to port 3000')
});
