import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';
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
app.use('/api/admin', adminRouter);
app.use('/api/doctor', doctorRouter);

//All routes defined in adminRouter will be prefixed with /api/admin
//For example, when you defined adminRouter.post('/add-doctor',...), the full route becomes:/api/admin/add-doctor
app.listen(port, () => console.log("Server Start"));
