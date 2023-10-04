import express from 'express'
import colors from 'colors'// this for making text colorful in console
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'

const app = express();

dotenv.config()

//database config
connectDB();

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes)

app.get('/', (req, res)=>{
    res.send("<h1>Assignment Techisor</h1>")
})

const PORT = process.env.PORT | 8000;

app.listen(PORT, ()=>{
    console.log(`Server is listening at port ${PORT}`.bgCyan.white)
})