import { error } from "console";
import {connect} from "../dbMongo.js"


export async function getUseres(){
    const db = await connect()
    const dataArr = await db.collection("dataBaseDefolt").find().toArray()
    return dataArr;
}

export async function insertUser(obj) {
    try{
        const db = await connect();
        const user = db.collection("dataBaseDefolt")
        const resolt = await user.insertOne(obj)
        console.log(`insert id:` , resolt.insertedId);
        return resolt.insertedId
    }catch(err){
        console.log(`big mistace`,err);
    }
}


export async function getOne(name){
    try{
        const db = await connect()
        const user =await db.collection("dataBaseDefolt").findOne({name:name})
        console.log(user);
        if(user) return user;
        console.log(`not faund user`);
        return "not faund user"
    }catch(err){
        return err
    } 
}