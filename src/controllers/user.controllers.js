const {User,Role,Education,Experience } = require('../db.js');

const getUserById = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findOne({
            where:{
                id:id
            },
            attributes:["id","name","email","phone","roleId","experienceId"]
        });
        if (user===null) throw new Error('User not found');
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
            },
            attributes:["id","name","email","phone","roleId","experienceId"]
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
            attributes:["id","name","email","phone","roleId","experienceId"]
        })
        res.status(200).json(DBusers);
    } catch (error) {
        res.status(404).json('Users not found!');
    }
}

const modifyUser=async (req,res)=>{
    const {id, educacion, experiencia}=req.body;
    try {
        const user = await User.findOne({
            where: {
                id : id
            },
            attributes:["id","name","email","phone","roleId","experienceId"]
        })
        if(user === null) throw new Error('User not found');
        const educacion_user = await Education.findOne({
            where: {
                name : educacion.name
            }
        })
        if(educacion_user !== null) await user.setEducation(educacion);
        else await user.createEducation(educacion);

        const experiencia_user = await Experience.findOne({
            where: {
                name : experiencia.name
            }
        })
        if(experiencia_user !== null) await user.setExperience(experiencia);
        else await user.createExperience(experiencia);

        res.status(201).json({user:user, msg:'User updated'});
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

module.exports = {
    createUser,
    verifyUser,
    getUserById,
    GetAll,
    modifyUser
};