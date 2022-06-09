const express =require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const PORT =process.env.PORT || 3000;
const peoplesdata = require("./src/model/reviewmodel")

app.get("/" , (req,res)=>{

     peoplesdata.find()
     .then(data=>{
        res.send(data)})
})


app.listen(PORT , (req,res)=>{
     console.log(`Server running on PORT ${PORT}`);
})