import {rout} from "./rout.js"

export function configUser(app){
    app.use("/",rout)
    app.use((req ,res)=>{
        res.status(400).json({msg:"you have a problme with router"})
    })
}