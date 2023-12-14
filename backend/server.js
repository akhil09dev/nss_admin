require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express');

const eventRoutes =require('./routes/events')
const volunteerRoutes = require('./routes/volunteers')
const app = express();

app.use(express.json())

app.use((req , res , next) =>{
    console.log(req.path ,req.method)
    next()
})

app.use('/', eventRoutes)
app.use('/', volunteerRoutes)


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to db")
    app.listen(process.env.PORT, ()=>{
        console.log("listing to NSS nitc from port" , process.env.PORT)
    })
    
}).catch((err)=>{
    console.log(err)
})


app.get('/', (req, res) =>{
    res.send('home page')
})



