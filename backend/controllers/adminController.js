import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, specialty, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;
        if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({ success: false, message: "Missing details" })
        }
        //validatine email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter a valid email" })

        }
        if (password.length < 8) {
            return res.json({ success: false, message: "please enter a strong password" })

        }
        //hasing doctor password 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        //upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" })
        const imageUrl = imageUpload.secure_url;
        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            specialty,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now(),
        }
        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();
        res.json({ success: true, message: "doctor added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { addDoctor }