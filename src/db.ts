import mongoose from "mongoose"

async function connection() {
    try{
        await mongoose.connect('mongodb://admin:12345@ac-4jhq8la-shard-00-00.duou9e6.mongodb.net:27017,ac-4jhq8la-shard-00-01.duou9e6.mongodb.net:27017,ac-4jhq8la-shard-00-02.duou9e6.mongodb.net:27017/?ssl=true&replicaSet=atlas-110af7-shard-0&authSource=admin&retryWrites=true&w=majority')
        console.log('Conectado ao banco')
    } catch (e) {
        console.log(e)
    }
}

export default connection;