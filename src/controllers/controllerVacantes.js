const axios = require('axios');
const { Vacante } = require('../db.js');
const { v1: uuidv1 } = require("uuid");

async function GetAll(req,res) {
    try {
        const DBvacantes=await Vacante.findAll({
            attributes:["id","titulo", "descripcion","requisitos","TipoEmpleo_id"]
        })
        res.status(200).json(DBvacantes);
    } catch (error) {
        res.status(404).json('Vacantes not found!');
    }
}

module.exports = {
    //New,
    GetAll
    //SearchById,
    //SearchByName
};