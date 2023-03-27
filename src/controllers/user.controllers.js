const {User, Role} = require('../db.js');

const getUserById = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        if(user === null) throw new Error('User not found');
        res.status(201).json({user:user, msg:'User found'});
    } catch (error) {
        res.status(404).json({error : error.message});
    }
}

const createUser = async (req, res) => {
    const {name, email, password, phone, role} = req.body;
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
                name : role.name
            }
        })
        if(role_user !== null) await new_user.setRole(role_user);
        else await new_user.createRole(role);
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
    verifyUser,
    getUserById
};