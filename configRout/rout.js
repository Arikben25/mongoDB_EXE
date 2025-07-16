import exspres from "express"
import {getUser,insertUse,getOneUser} from "../controles/controlUser.js"


const rout = exspres.Router()

rout.get("/",getUser)
rout.get("/getone",getOneUser)
rout.post("/",insertUse)

export{
    rout
}

