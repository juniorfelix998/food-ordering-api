import express from 'express';

const app = express()

app.use('/',(req,res)=>{
    return res.json("Hello from food order backend!")
})

app.listen(8000,()=>{
    console.log("App is listening at port 8000")
})