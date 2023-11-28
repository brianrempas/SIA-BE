const Schedule = require("../models/Schedule");

const getAllSchedule = async (req, res) => {
    await Schedule.findAll()
    .then(data => {
        if(!data.length) {
            return res.status(201).json({
                message: 'data is empty',
                result: data
            });
        }

        res.status(201).json({
            result: data
        });
    })
    .catch((error) => {
        res.status(400).json({
            message: "error when get all data: " + error
        });
    });
}

const createSchedule = async (req, res) => {
    var data = req.body
    await Schedule.create({
        idProdi: data.idProdi,
        idSubject: data.idSubject,
        day: data.day,
        timeStart: data.tS,
        timeEnd: data.tE
    })
    .then(data => {
        res.status(201).json({
            result: data
        });
    })
    .catch((error) => {
        res.status(400).json({
            message: "error when creating data: " + error
        });
    });
}

const updateSchedule = async (req, res) => {
    const data = req.body
    await Schedule.update(
        {
            idProdi: data.idProdi,
            idSubject: data.idSubject,
            day: data.day,
            timeStart: data.tS,
            timeEnd: data.tE
        },
        {
            where: {
                schedule_Id: data.scheduleId
            }
        }
    )
    .then(data => {
        if (data[0] === 0) {
            return res.status(400).json({
                message: "Could not find schedule"
            });
        } 
        
        res.status(201).json({
            result: data
        });
    })
    .catch((error) => {
        res.status(400).json({
            message: "error when updating data: " + error
        });
    });
}

const deleteSchedule = async (req, res) => {
    await Schedule.destroy(
        {
            where: {
                schedule_Id: req.params.id
            }
        }
    )
    .then(data => {
        if (data[0] === 0) {
            return res.status(400).json({
                message: "Could not find schedule"
            });
        } 
        
        res.status(201).json({
            result: data
        });
    })
    .catch((error) => {
        res.status(400).json({
            message: "error when deleting data: " + error
        });
    });
}


module.exports = {
    getAllSchedule,
    createSchedule,
    updateSchedule,
    deleteSchedule
}
