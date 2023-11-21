const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');
require('dotenv').config();
const app= express();
app.use(cors());
app.use(bodyParser.json());
const port=process.env.PORT ||5001;




app.use('/',(req,res)=>{
    res.send("Apii Running");
})

mongoose.connect(process.env.MONGO).then(()=>{
    app.listen(port,()=>{
        console.log("Connected");
    })
})
.catch(err=>{
    console.log(err);
})