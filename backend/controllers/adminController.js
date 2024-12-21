import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'
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
//api fpr admin login
const logInAdmin = async (req, res) => {
    const { email, password } = req.body;  // You were missing this!

    try {
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            // Generate JWT token
            const token = jwt.sign(
                { email, password },
                process.env.JWT_SECRET,
                { expiresIn: '8h' }  // Add token expiration

            );

            // Return success response with token
            res.json({
                success: true,
                token
            });
        } else {
            // Return error for invalid credentials
            res.json({ success: false, message: "Invalid credentials" });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { addDoctor, logInAdmin }