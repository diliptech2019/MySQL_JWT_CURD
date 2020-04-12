require('dotenv').config()
const express = require("express")
const app = express()

const userRouter = require("./api/user/user.router")

//const port = 3000;
/*
app.get("/api", (req,res)=>{
    res.json({
        success : 1,
        message : 'This my first test rest api'
    })
})
*/
app.use(express.json())

app.use("/api/user",userRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log(`Server is start at port :`,process.env.APP_PORT)
})