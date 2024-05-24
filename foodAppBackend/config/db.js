import mongoose from 'mongoose'

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://perfectprecious2022:reDEMPTION100@cluster0.epjyvxn.mongodb.net/tomatoApp').then(()=>console.log("DB Connected"))
}