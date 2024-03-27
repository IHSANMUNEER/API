const express =  require('express')
var app=express();
require("dotenv").config()
const db  = require("./Db/Connection")

const port = process.env.PORT || 3000;
app.use(express.json());

const product_routes = require("./Routes/Route");

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use("/products",product_routes)

app.listen(port, async()=>{
    await db(process.env.MONGODB_URL);
    //await model.create(productJson)
    console.log('listening on port 3000')
})
