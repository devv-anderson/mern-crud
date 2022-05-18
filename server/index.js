const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel = require("./models/Users")
const cors = require("cors")
require('dotenv').config()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)

app.get("/getUsers", (req, res) => { // req = received information from front-end, res = response to front-end
    UserModel.find({}, (err, result) => { // finding all users
        err? res.json(err) : res.json(result) // sending result to front-end
        })
   }
)

app.post("/createUser", async (req, res) => {
    user = req.body
    const newUser = new UserModel(user)
    await newUser.save()

    res.json("User created succefuly!")
})

app.listen(3001, () => {
    console.log("Server running!")
})
