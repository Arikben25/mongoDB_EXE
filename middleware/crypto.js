import bcrypt from "bcrypt"
import { getOne } from "../dal/dal.js"
import { checkToken, createToken } from "./token.js "

export async function checkCreatUser(req, res, next) {
    const { name } = req.body

    try {
        const user = await getOne(name)
        if (user) {
            res.status(400).json({ msg: 'The user already exists in the system' })
            return
        }
        next()

    } catch (err) {
        console.error("err is: ", err)
        res.status(500).json({ msg: "server error try later" })
        return
    }
}
//===========================

export async function checkUser(req, res, next) {
    const { name, password } = req.body
    const verifiedUsers = {};

    try {
        const user = await getOne(name) //בדיקה שהמשתמש קיים במערכת
        if (!user.name) {
            res.status(400).json({ msg: "The user does not exist in the system" })
            return
        }
        if (!password) {
            const token = checkToken(req.headers.authorization)
            if (token) {
                next()
                return
            }
            res.status(400).json({ mgs: "the token is not good enter password" })
            return
        }

        const isMatch = await bcrypt.compare(password, user.password) // בדיקה אם קוד תקין
        if (!isMatch) {
            res.status(400).json({ msg: "The password is incorrect." })
            return
        }

        verifiedUsers[name] = true
        const newToken = createToken(user.name)
        res.json({ msg: 'Verified', newToken });
        //next()

    } catch (err) {
        console.error("err is: ", err)
        res.status(500).json({ msg: "server error try later" })
        return
    }
}
