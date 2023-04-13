const { Notification } = require('../db.js');

const createNotification = async (req, res) => {
    const {description, userId} = req.body;
    try {
        const new_notification = await Notification.create({
            description : description,
            userId : userId
        })
        if(!new_notification) throw new Error('No se pudo crear la notificacion');
        res.status(201).json({notification:new_notification, msg:'Notification created'});
        } catch (error) {
        res.status(404).json({error : error.message});
    }
}

const getNotificationByUserId = async (req, res) => {
    const {id} = req.params;
    try {
        const notification = await Notification.findAll({
            where:{
                userId:id
            },
            attributes:["description"]
        });
        if (notification===null) throw new Error('Notification not found');
        res.status(200).json({notification:notification, msg:'Notification found'});
    } catch (error) {
        res.status(404).json({error : error.message});
    }
}