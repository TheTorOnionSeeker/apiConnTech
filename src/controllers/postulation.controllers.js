const { Postulation } = require('../db.js');

const createPostulation = async (req, res) => {
    const {vacantId, userId} = req.body;
    try {
        const new_postulation = await Postulation.create({
            vacantId : vacantId,
            userId : userId
        })
        if(!new_postulation) throw new Error('No se pudo crear la postulacion');
        res.status(201).json({postulation:new_postulation, msg:'Postulation created'});
        } catch (error) {
        res.status(404).json({error : error.message});
    }
}

const getPostulationById = async (req, res) => {
    const {id} = req.params;
    try {
        const postulation = await Postulation.findAll({
            where:{
                vacantId:id
            },
            attributes:["userId"]
        });
        if (postulation===null) throw new Error('Postulation not found');
        res.status(200).json({postulation:postulation, msg:'Postulation found'});
    } catch (error) {
        res.status(404).json({error : error.message});
    }
}

module.exports = {
    createPostulation,
    getPostulationById
};