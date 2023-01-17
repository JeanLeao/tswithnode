import mongoose from "mongoose"

async function connection() {
    try{
        await mongoose.connect('mongodb+srv://admin:12345@cluster0.duou9e6.mongodb.net/?retryWrites=true&w=majority')
        console.log('Conectado ao banco')
    } catch (e) {
        console.log(e)
    }
}

export default connection;