import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
//api to register user 
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !password || !email) {
            return res.json({ success: false, message: "Missing Details" })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Enter A Valid Email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Enter Strong Password" })

        }
        //hashing user password 
        const salt = await bcrypt.genSalt(10) // number of rounds 
        const hashedPassword = await bcrypt.hash(password, salt);
        const userData = { name, email, password: hashedPassword };
        const newUser = new userModel(userData);
        //_id
        const user = await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, token })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User doesn't exist!" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            res.json({ success: true, token });
        } else {
            res.json({ success: false, message: "Invalid Credentials " })

        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
//api to get user data
const getProfile = async (req, res) => {

    try {
        const { userId } = req.body;
        const userData = await userModel.findById(userId).select('-password')
        res.json({ success: true, userData });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
const updatetProfile = async (req, res) => {

    try {
        const { userId, name, phone, address, dob, gender } = req.body;
        const imageFile = req.file;
        if (!userId || !name || !phone || !address || !dob || !gender) {
            return res.json({ success: false, message: "Data Missing" })

        }

        await userModel.findByIdAndUpdate(userId, { name, phone, address: JSON.parse(address), dob, gender });
        if (imageFile) {
            //upload image to cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
            const imageUrl = imageUpload.secure_url;
            await userModel.findByIdAndUpdate(userId, { image: imageUrl })
        }
        res.json({ success: true, message: "Profile Updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
export { registerUser, loginUser, getProfile, updatetProfile }
