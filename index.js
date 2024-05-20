import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import authRoute from './authRoute.js'
import connectDB from './database.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { join } from 'path'
import imageRouter from './imageController.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();


const router = express.Router()

router.use('/auth', authRoute)




app.use(cors({origin:"*"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api/v1', router)
app.use(express.static(join(__dirname, 'public')));

app.post('/post', imageRouter);



app.get('/api/v1', (req,res)=> {
    return res.redirect('form.html')
})




const startServer  = async () => {
    const PORT  = process.env.PORT || 4000
    connectDB()
    try {
       app.listen(PORT,() => {console.log(`APP IS RUNNING ON PORT: ${PORT}`);})
    } catch (error) {
       console.log(error);
    }
 };
 
 startServer();
 
 app.get("/", (req,res) => {
    return res.redirect('form.html')
 })