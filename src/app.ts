import Express from "express";
import mongoose, { Mongoose } from "mongoose";
import connection from "./db";
import router from "./router";


var app = Express()
//JSON middleware
app.use(Express.json())


app.use(router)


app.listen(process.env.PORT, () => {
    connection()
    console.log('APP rodando')
})
