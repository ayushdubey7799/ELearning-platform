import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

const dbUrl:string = process.env.DB_URL || "";

const connectDB = async () => {
    try{
        let res: any = await mongoose.connect(dbUrl);
        console.log(`Database connected with ${res.connection.host}`);

    } catch (error : any) {
       console.log(error.message);
       setTimeout(connectDB,5000)
    }
}

export default connectDB;