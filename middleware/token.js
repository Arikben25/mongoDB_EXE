import jwt from "jsonwebtoken"
import { config } from "dotenv"
config()
const JWT_SECRET = process.env.JWT_SECRET

export function createToken(userName) {
    const token = jwt.sign(
        { userName },
        JWT_SECRET,
        { expiresIn: "1H" }
    )
    return token
}

export function checkToken(authHeader) {
    const token = authHeader.split(" ")[1]
    try{
        const decret = jwt.verify(token, JWT_SECRET)
        console.log(`its work`);
        return true;
    }catch(err){
        return false
    }   
}