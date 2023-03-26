const {User} = require('../db.js');
// const { Op } = require('sequelize');

const createUser = async (req, res) => {
    const {name, email, password, phone,role} = req.body;
    try {
        const new_user = await User.create({
            name:name,
            email:email,
            password:password,
            phone:phone
        })
        res.status(201).json(new_user);
    } catch (error) {
        res.status(404).json({error : error.message});
    }
}

const verifyUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({
            where: {
                email : email,
                password : password
            }
        })
        if(user === null) throw new Error('User not found');
        res.status(201).json({user:user, msg:'User found'});
    } catch (error) {
        res.status(404).json({error : error.message});
    }
}

async function GetAll(req,res) {
    try {
        const DBusers=await User.findAll({
            attributes:["id","name","email","phone"]
        })
        res.status(200).json(DBusers);
    } catch (error) {
        res.status(404).json('Users not found!');
    }
}

module.exports = {
    createUser,
    verifyUser,
    GetAll
};