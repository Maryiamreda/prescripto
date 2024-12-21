import jwt from 'jsonwebtoken'
//admin authentcation middleware 
const authAdmin = async (req, res, next) => {

    try {
        const { atoken } = req.headers
        if (!atoken) {
            res.json({ success: false, message: "Not Autherized Login Again" })
        }
        //to verify this token we have to decode this token 
        const token_decode = jwt.verify(atoken, process.env.JWT_SECRET)
        if (token_decode != process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            res.json({ success: false, message: "Not Autherized Login Again" })
        }
        next(); //this's like a "continue" button in Express middleware:

    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
export default authAdmin;