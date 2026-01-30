import express from "express";
import fileRouter from "./routes/check-file-api.mjs"
import 'dotenv/config';
import userRouter from "./routes/userAPI.mjs";


const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.static('public'))

app.use('/files', fileRouter);
app.use('/user', userRouter)
app.get('/', (req, res) => {
  res.send('Hello Worlds');
})



app.listen(PORT, () => {
  console.log('Server is running')
})