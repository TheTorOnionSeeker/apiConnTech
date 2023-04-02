const {Role} = require('../db.js');

function ordenarObjetos(propiedad, sentido, funcionOrdenamiento) {
    let llaveOrdenamiento = funcionOrdenamiento ? 
        function(objeto) {
            return funcionOrdenamiento(objeto[propiedad]);
        } : function(objeto) {
            return objeto[propiedad];
        }
    
        sentido = !sentido ? 1 : -1;

        return function (objeto1, objeto2) {
            return objeto1 = llaveOrdenamiento(objeto1), objeto2 = llaveOrdenamiento(objeto2), sentido * ((objeto1 > objeto2) - (objeto2 > objeto1));
        }
}

const sortRole = async (req, res) => {
    const {array, name} = req.body;
    try {
        const role = await Role.findOne({
            where: {
                name : name
            },
            attributes:["name"]
        })
        if(role === null) throw new Error('Role not found');
    } catch (error) {
        res.status(404).json({error : error.message})
    }
}

const sortGeneral =  (req, res) =>{
    const {array, sort, type} = req.body;
    try {
        if(array.length === 0) throw new Error('Arreglo vacio');
        const valor = sort === 'ascendente' ? false : true;
        if(type === ''){
            if(sort === 'ascendente')
                return res.status(200).json(array.sort(
                    (a,b) => a.id - b.id
                ));
            else if(sort === 'descendente')
                return res.status(200).json(array.sort(
                    (a,b) => b.id - a.id
                ));
            else
                throw new Error('Error en el parametro sort')
        }else{
            const response = array.sort(ordenarObjetos(type, valor));
            return res.status(200).json(response);
        }
    } catch (error) {
        res.status(404).json({error : error.message})
    }
}

module.exports = {
    sortGeneral,
    sortRole
}