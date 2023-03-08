const authModel = require("../models/model.user");
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET_KEY
const bcrypt = require("bcrypt")

const register = async (req, res) => {
    const {username, email, password} = req.body
    try{
        const user = await authModel.create({
            username,
            email,
            password
        });
        res.status(201).json({
            success: true,
            user
        })
    }
    catch (error){
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
};

const login = async (req, res) => {
    const {username, password} = req.body;
    if(!username || !password) {
        res.status(400).json({
            success: false,
            error: "Please provide an username or password"
        })
    }
    try{
        const user = await authModel.findOne({username: req.body.username})
        if(!user) {
            res.status(404).json({
                success: false,
                error: "Invalid credentials"
            })
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword) {
            res.status(400).json({
                success: false,
                error: "Invalid credentials"
            })
        }
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, SECRET)

        const {password, isAdmin, ...otherInfo} = user._doc
        res.cookie("accessToken", token, {
            httpOnly: true
        }).status(200).json({...otherInfo})
    }
    catch (error){
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = {register, login}