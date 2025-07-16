import express from "express"
import{config} from "dotenv"
import {configUser} from "./configRout/configUser.js"
config()
const PORT = process.env.DB_PORT;

const app = express()

app.use(express.json())
configUser(app)

app.listen(PORT,()=>{
    console.log(`The server is app on port ${PORT}`);
}) 