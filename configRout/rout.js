import exspres from "express"
import { getUser, insertUse, getOneUser } from "../controles/controlUser.js"
import { checkCreatUser, checkUser } from "../middleware/crypto.js"


const rout = exspres.Router()

rout.post("/singin", checkUser, getUser)
rout.get("/getone", getOneUser)
rout.post("/singup", checkCreatUser, insertUse)

export {
    rout
}

