import express from 'express'
import cors from 'cors'
import 'dotenv/config'
//app config
const app = express();
const port = process.env.PORT || 4000
app.use(express.json())

app.use(cors()) //allow backend to connect with the fronyend 
