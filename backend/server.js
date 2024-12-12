import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb';
import connectCloudinary from './config/cloudinary';
//app config
const app = express();
const port = process.env.PORT || 4000
app.use(express.json())
connectDB();
connectCloudinary()

app.use(cors()) //allow backend to connect with the fronyend 
//api endpoints
app.get('/', (req, res) => {
    res.send('API WORKING')

})
app.listen(port, () => console.log("Server Start"))
