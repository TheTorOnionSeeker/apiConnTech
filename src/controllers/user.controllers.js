const {User} = require('../db.js');
// const { Op } = require('sequelize');

const createUser = async (req, res) => {
    const {name, email, password, telephone,role} = req.body;
    try {
        const new_user = await User.create({
            
        })
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

module.exports = {
    createUser,
    verifyUser
};