import express from "express";
import { fileRouter} from "./routes/api.mjs"
import 'dotenv/config';


const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.static('public'))

app.use('/files', fileRouter);

app.get('/', (req, res) => {
  res.send('Hello Worlds');
})



app.listen(PORT, () => {
  console.log('Server is running')
})