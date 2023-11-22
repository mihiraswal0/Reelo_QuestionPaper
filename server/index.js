const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');
require('dotenv').config();
const app= express();
app.use(cors());
app.use(bodyParser.json());
const port=process.env.PORT ||5001;
const {addPaper,generatePaper,allQuestion}=require('./controller.js');

app.post('/generate',generatePaper);
app.post('/add',addPaper);

app.get('/',allQuestion);

mongoose.connect(process.env.MONGO).then(()=>{
    app.listen(port,()=>{
        console.log("Connected to port:"+port);
    })
})
.catch(err=>{
    console.log(err);
})