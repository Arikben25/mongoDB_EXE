import {getUseres,insertUser,getOne} from "../dal/dal.js"

export async function getUser(req,res){
    try{
        const data = await getUseres()
        res.json(data)
    }catch(err){
        res.status(500).json({msg:"the error is" , err})
    }
}

export async function insertUse(req , res) {
    const {name,age,email} = req.body;
    console.log(name,age,email);
    const obj = {name:name, age:age, email:email}
    try{
        const resolt = await insertUser(obj)
        res.json(resolt)
    }catch(err){
        res.status(500).json({msg:"the error is" , err})
    }
}

export async function getOneUser(req, res) {
    const data =await getOne("ariel")
    console.log(data);
    res.send(data)
}