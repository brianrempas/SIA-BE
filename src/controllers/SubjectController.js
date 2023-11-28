const Subject = require("../models/Subject");

const getAllSubjects = async (req, res) => {
    await Subject.findAll()
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

const createSubject = async (req, res) => {
    //subject_id code name sks
    
    const data = req.body
    await Subject.create(
        {
            code: data.code,
            idProdi: data.idProdi,
            name: data.name,
            sks: data.sks,
        }
    )
    .then(data => {
        res.status(201).json({
            result: data
        });
    })
    .catch((error) => {
        res.status(400).json({
            message: "error when creating data: " + error
        });
    })
}

const updateSubject = async (req, res) => {
    const data = req.body
    await Subject.update(
        {
            code: data.code,
            name: data.name,
            idProdi: data.idProdi,
            sks: data.sks,
        },
        {
            where: {
                subject_id: data.subjectId
            }
        }
    )
    .then(data => {
        res.status(201).json({
            result: data
        });
    })
    .catch((error) => {
        res.status(400).json({
            message: "error when updating data: " + error
        });
    })
}

const deleteSubject = async (req, res) => {
    await Subject.destroy(
        {
            where: {
                subject_id: req.params.id
            }
        }
    )
    .then(data => {
        res.status(201).json({
            result: data
        });
    })
    .catch((error) => {
        res.status(400).json({
            message: "error when deleting data: " + error
        });
    })
}

module.exports = {
    getAllSubjects,
    createSubject,
    updateSubject,
    deleteSubject
}
