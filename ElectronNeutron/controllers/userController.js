const Players = require("../models/users")

exports.newPlayer = async (req,res) => {
    const nPlayer = await Players.insertMany(req.body)

    res.status(200).json({
        message:"succes created new user ",
        data :nPlayer
    })
}