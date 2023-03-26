const {Vacant} = require('../db.js');
const { Op } = require('sequelize');

const getVacantByName = async (req, res) => {
    const {name} = req.params;
    try {
        if(typeof name != 'string')
            throw new Error('Ingresar un dato tipo string');
        const specifics_name_bd = await Vacant.findAll({
            where: { name: { [Op.iLike] : `%${name}%`}}
         });
         res.status(200).json(specifics_name_bd);
    } catch (error) {
        res.status(404).json({error : error.message});
    }
}

module.exports = {
    getVacantByName
};
