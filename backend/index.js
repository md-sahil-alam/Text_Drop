const express= require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const {textRouter} = require("./textRouter");
const env = require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1",textRouter);


async function main(){
  const PORT = 8000
  try {
    console.log("conecting mongo")
    await mongoose.connect(MONGO_URL)
    app.listen(PORT,()=>{
    console.log("server is listing on "+ PORT)
  })
  } catch (error) {
    console.log(error)
  }
}
main();