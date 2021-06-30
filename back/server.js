const express = require('express');
const data = require('./data/data');
const app = express();

app.get("/", (req, res)=>{
  res.send("running")
});

app.get("/api/products", (req, res)=>{
  res.json(data);
});

app.get("/api/products/:id", (req, res)=>{
  let prod = data[0].men.find(product => product.id === req.params.id);
  let prod2= data[0].women.find(product => product.id === req.params.id);
  if (typeof prod === 'undefined' && typeof prod2 !== 'undefined' ) {
    prod = prod2;
  }
  else if (typeof prod === 'undefined' && typeof prod2 === 'undefined'){
    prod= "nothing found"
  }
  console.log(data.men[0])
  res.json(prod);
})
app.listen(5000, console.log("listening on port 5000"));
