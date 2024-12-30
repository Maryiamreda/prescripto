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
        // Check if the decoded email matches the admin's email
        if (token_decode.email !== process.env.ADMIN_EMAIL) {
            return res.status(403).json({ success: false, message: "Not Authorized. Login Again." });
        }

        next(); //this's like a "continue" button in Express middleware:

    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
export default authAdmin;