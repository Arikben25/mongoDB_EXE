import { error } from "console";
import {connect} from "../dbMongo.js"


export async function getUseres(){
    const db = await connect()
    const dataArr = await db.collection("users").find().toArray()
    return dataArr;
}

export async function insertUser(obj) {
    try{
        const db = await connect();
        const user = db.collection("users")
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
        const user =await db.collection("users").findOne({name:name})
        console.log(user);
        if(user) return user;
        console.log(`not faund user`);
        return false
    }catch(err){
        return err
    } 
}