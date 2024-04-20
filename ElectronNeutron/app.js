const express = require('express')
const fs = require('fs')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Players = require('./models/users')
const { stringify } = require('querystring')

require('dotenv').config()





const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("succefull connection with database")
}).catch((err) => console.log(err))

const userSchema = new mongoose.Schema({
    fname: {
        type:String,
        required:true
    },
    lname : {
        type:String,
        required:true
    },
    email : {
        type :String,
        required:true,
        unique: true
    },
    password : {
        type:String,
        require:true,
    }
});


userSchema.pre( 'save', async function(next)
{
    if(!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password,12)
    next()
} ) 
    

const Users = mongoose.model('Users',userSchema)



app.post('/signup',async (req,res)=>{
    const {fname,lname,email,password} = req.body
    const user = await Users.findOne({email})

    if(user) {
        res.status(400).json({
            message : "User email already exist",
            data : email
        })
    } else {
        const newuser = await Users.create({
            fname,lname,email,password
        })
        res.status(200).json({
            message:"new user creaed",
            data : newuser

        })
    }
})

app.post('/login',async (req,res) => {
    const {email,password} = req.body
    const user = await Users.findOne({email})
    

    try {
        if(!user) {
            const err = new Error("Given Email is not Registered")
            err.statusCode = 400
            throw err
        }



        const isMatch = await bcrypt.compare(password,user.password)
        console.log(isMatch)
        if(!isMatch) {
            const err = new Error("Incorrect Password")
            err.statusCode = 400
            throw err
        }

        const token = jwt.sign({id : user._id},
        "Heloo-this-is-a-string",{
            expiresIn : '10d'
        })
        res.status(200).json({
            message:"user logged in successfully",
            token
        })


    } catch(err) {
        res.status(err.statusCode).json({
            message : err.message
        })
    }
})

app.get('/find',async (req,res)=>{
    const all = await Players.find()

    res.status(200).json({
        message:"OK",
        data : {
            all
        }
    })
})

app.get('/find/:id',async (req,res) => {
    const pal = await Players.findById(req.params.id)
    if(pal){
        res.status(200).json({
            message:"found",
            data : {
                pal
            }
        })
    } else {
        res.status(404).json({
            message:"not found",
        })
    }
    
})

app.put('/update/:id',async (req,res)=> {
    const pal = await Players.findByIdAndUpdate(req.params.id,req.body)
    
    res.status(200).json({
        data:pal
    })
})

app.delete('/remove/:id',async (req,res) => {
    const sorryPal = await Players.findByIdAndDelete(req.params.id)

    res.status(200).json({
        message :"deleted",
        data : sorryPal
    })
})



console.log(process.env.MONGODB_URL)





app.listen(process.env.PORT,()=>{console.log("Server Initiated")})