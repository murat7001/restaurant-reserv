import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT_RESERV",
    }).then(() => {
        console.log("Connected to database saccesfully");
    }).catch(err => {
        console.log(`Some error occured while connecting to database! ${err}`);
    })
}