const {Vacant, Type} = require('../db.js');
const { Op } = require('sequelize');
const User = require('../models/User.js');
//const { v1: uuidv1 } = require("uuid");

const getVacantById = async (req, res) => {
    const {id} = req.params;
    try {
        const vacant = await Vacant.findOne({
            where:{
                id:id
            },
            attributes:["id","title","requeriments","description","typeId"]});
        if (vacant===null) throw new Error('Vacant not found')
        res.status(201).json({vacant:vacant, msg:'Vacant found'});
    } catch (error) {
        res.status(404).json({error : error.message});
    }
}

const getVacantByName = async (req, res) => {
    const {title} = req.params;
    try {
        if(typeof title != 'string')
            throw new Error('Ingresar un dato tipo string');
        const specifics_name_bd = await Vacant.findAll({
            attributes:["id","title","requeriments","description","typeId"],
            where: { title: { [Op.iLike] : `%${title}%`}}
         });
         res.status(200).json(specifics_name_bd);
    } catch (error) {
        res.status(404).json({error : error.message});
    }
}

async function GetAll(req,res) {
    try {
        const DBvacants=await Vacant.findAll({
            attributes:["id","title","requeriments","description","typeId","userId"]
        })
        res.status(200).json(DBvacants);
    } catch (error) {
        res.status(404).json('Vacants not found!');
    }
}

async function createVacant(req,res) {
    try {
        const { title, requeriments, description, type, userId} = req.body;

        const newVacant = await Vacant.create({
            //id: uuidv1(),
            title: title,
            requeriments: requeriments,
            description: description,
            userId:userId
        });
        if(!newVacant) throw new Error('Vacant NOT created');
        const type_job = await Type.findOne({
            where: {
                nameType : type
            }
        });
        if(type_job !== null) await newVacant.setType(type_job);
        else await newVacant.createType({
            nameType : type
        });
        /* const user_Id = await User.findOne({
            where: {
                id : userId
            }
        });
        if(user_Id !== null) await newVacant.setUser(user_Id);
        else await newVacant.createUser({
            id : userId
        }); */
        res.status(201).json({vacant:newVacant, msg:'Vacant created'});

    } catch (error) {
        res.status(400).json('Error. Vacants NOT created!');
    }
}

module.exports = {
    getVacantByName,
    GetAll,
    getVacantById,
    createVacant
};
