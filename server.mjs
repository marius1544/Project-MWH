import express from "express";
import { postFiles, getFiles, changeFiles, deleteFiles} from "./routes/api.mjs"
import { settingsRouter } from './routes/settingsAPI.mjs'
import 'dotenv/config';


const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.static('public'))

app.use('/deleteFiles', deleteFiles);
app.use('/changeFiles', changeFiles);
app.use('/postFile', postFiles);
app.use('/getFiles', getFiles);
app.use('/settings', settingsRouter);

app.get('/', (req, res) => {
  res.send('Hello Worlds');
})



app.listen(PORT, () => {
  console.log('Server is running')
})