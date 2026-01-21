import express from "express";

//const PORT = system.env.PORT || 8080;
const PORT = 8080;
import { settingsRouter } from './routes/api.mjs'
const app = new express();


app.use(express.static('public'))
app.use('/settings', settingsRouter);
app.get('/', (req, res) => {
  res.send('Hello Worlds');
})



app.listen(PORT, () => {
  console.log('Server is running')
})