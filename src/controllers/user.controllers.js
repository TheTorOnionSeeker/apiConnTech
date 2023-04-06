const {User,Role } = require('../db.js');

const getUserById = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findOne({
            where:{
                id:id
            },
            attributes:["id","name","email","phone","roleId"]
        });
        if (user===null) throw new Error('User not found');
        res.status(201).json({user:user, msg:'User found'});
    } catch (error) {
        res.status(404).json({error : error.message});
    }
}

const createUser = async (req, res) => {
    const {name, email, password, phone, roleId} = req.body;
    try {
        const new_user = await User.create({
            name : name,
            email : email,
            phone : phone,
            password : password
        })
        if(!new_user) throw new Error('No se pudo crear el usuario');
        const role_user = await Role.findOne({
            where: {
                name : roleId
            }
        })
        if(role_user !== null) await new_user.setRole(role_user);
        else await new_user.createRole({name:roleId});
        res.status(201).json({user:new_user, msg:'User created'});
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
            },
            attributes:["id","name","email","phone","roleId"]
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
            attributes:["id","name","email","phone","roleId"]
        })
        res.status(200).json(DBusers);
    } catch (error) {
        res.status(404).json('Users not found!');
    }
}

module.exports = {
    createUser,
    verifyUser,
    getUserById,
    GetAll
};