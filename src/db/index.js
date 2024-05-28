import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // learn connectionInstance.connection.host
        console.log(`\n DB connected !! HOST :  ${connectionInstance.connection.host}`);
    }catch(error){
        console.log('DB connection Error: ', error);
        //study process.exit(1)
        process.exit(1);
    }
}

export default connectDB;