const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',route);

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is connected")
});