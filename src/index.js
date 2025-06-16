//require ('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config()

connectDB()

.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at the at port : ${process.env.PORT}`)
    }) 
})
.catch((err) => {
     console.log("DB connection error failed !!! ",err);
})












/*
( async ()  => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on the port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ",error)
    }
}) ()

*/