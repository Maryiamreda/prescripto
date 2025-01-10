import jwt from 'jsonwebtoken'
//admin authentcation middleware 
const authUser = async (req, res, next) => {

    try {
        const { token } = req.headers
        if (!token) {
            return res.status(401).json({ success: false, message: "Not Authorized. Please login again." });
        }
        //to verify this token we have to decode this token 
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the decoded email matches the admin's email
        req.body.userId = token_decode.id

        next(); //this's like a "continue" button in Express middleware:
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
export default authUser;