
const mongoose = require('mongoose')

const ssSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true
    },
    age : {
        type : Number
    }
})
const Players = mongoose.model("Players",ssSchema)

module.exports = Players