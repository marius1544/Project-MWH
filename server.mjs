import express from "express";

//const PORT = system.env.PORT || 8080;
const PORT = 8080;
const app = new express();


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log('Server is running')
})