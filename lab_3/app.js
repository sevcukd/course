import express from 'express'
import dotenv from 'dotenv'
import Api from "./api/index.js"
import mongoose from "mongoose";
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(Api)

app.listen(process.env.PORT, async () => {
    await mongoose.connect(process.env.MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true})
    console.log(`Example app listening on port ${process.env.PORT}`)
})