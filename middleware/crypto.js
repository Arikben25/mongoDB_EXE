import bcrypt from "bcrypt"
import { getOne } from "../dal/dal.js"

export async function checkCreatUser(req, res, next) {
    const { name } = req.body
    console.log(name);
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




export async function checkUser(req, res, next) {
    const { name, password } = req.body
    const verifiedUsers = {};

    try {
        const user = await getOne(name)
        if (!user.name) {
            res.status(400).json({ msg: "The user does not exist in the system" })
            return
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            res.status(400).json({ msg: "The password is incorrect." })
            return
        }
        verifiedUsers[name] = true
        res.json({ msg: 'Verified' });
        //next()

    } catch (err) {
        console.error("err is: ", err)
        res.status(500).json({ msg: "server error try later" })
        return
    }
}