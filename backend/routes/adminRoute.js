
import express from 'express'
import { addDoctor, logInAdmin } from '../controllers/adminController.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authAdmin.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor)

adminRouter.post('/login', logInAdmin)

export default adminRouter;
//This code sets up an Express router for admin functionalities. It creates a POST route at '/add-doctor' that:
//1-Uses the Multer middleware to handle a single image upload
//2-Processes the doctor registration through the addDoctor controller

//upload.single('image') tells Multer to:
//1-Look for a file field named 'image' in the form data
//2-Process one file only (that's what .single() means)