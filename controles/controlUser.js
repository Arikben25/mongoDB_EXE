import { getUseres, insertUser, getOne } from "../dal/dal.js"
import bcrypt from "bcrypt"

export async function getUser(req, res) {
    try {
        const data = await getUseres()
        res.json(data)
    } catch (err) {
        res.status(500).json({ msg: "the error is", err })
    }
}

export async function insertUse(req, res) {
    try {
        const { name, password } = req.body;

        const passHASH = await bcrypt.hash(password, 10)
        const obj = { name: name, password: passHASH }

        const resolt = await insertUser(obj)
        res.json(resolt)
    } catch (err) {
        res.status(500).json({ msg: "the error is", err })
    }
}

export async function getOneUser(req, res) {
    const data = await getOne()//name
    console.log(data);
    res.send(data)
}