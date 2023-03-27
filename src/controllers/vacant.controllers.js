const {Vacant, Type} = require('../db.js');
const { Op } = require('sequelize');
//const { v1: uuidv1 } = require("uuid");

const getVacantById = async (req, res) => {
    const {id} = req.params;
    try {
        const vacant = await Vacant.findByPk(id);
        res.status(201).json({user:vacant, msg:'Vacant found'});
    } catch (error) {
        res.status(404).json({error : error.message});
    }
}

const getVacantByName = async (req, res) => {
    const {title} = req.params;
    try {
        if(typeof name != 'string')
            throw new Error('Ingresar un dato tipo string');
        const specifics_name_bd = await Vacant.findAll({
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
            attributes:["id","title","requeriments","description","typeId"]
        })
        res.status(200).json(DBvacants);
    } catch (error) {
        res.status(404).json('Vacants not found!');
    }
}

async function createVacant(req,res) {
    try {
        const { title, requeriments, description, type} = req.body;
        const newVacant = await Vacant.create({
            title: title,
            requeriments: requeriments,
            description: description
        });
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
