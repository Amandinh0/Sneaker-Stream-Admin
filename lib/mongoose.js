import mongoose, { mongo } from "mongoose";

export function mongooseConnect(){
    
    if (mongoose.connection.readystate === 1){
        return mongoose.connection.asPromise();
    }else{
        const url = process.env.MONGODB_URI; 
        return mongoose.connect(url); 
    }
}