const express = require("express");
const connectDB = require("./db/conn");
const cors = require("cors")
const env = require("dotenv").config()

const port = process.env.PORT || 6000;

const app = express();

app.use(express.json())
app.use(cors());
app.use("/uploads", express.static('uploads') )

app.use(express.urlencoded({extended:false}))
connectDB()
// app.get('/', (req,res)=>{
//     res.send("Hello World");
// })

app.use("/user", require("./router/userRouter"))

app.use("/product", require("./router/productRouter"))

app.listen(port, ()=> console.log(`server is running of port ${port}`))


