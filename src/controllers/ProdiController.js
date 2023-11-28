const Prodi = require("../models/Prodi");

const getAllProdi = async (req, res) => {
    await Prodi.findAll()
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

const createProdi = async (req, res) => {
    var data = req.body
    await Prodi.create({
        name: data.name,
        idLecture: data.idLecture,
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

const updateProdi = async (req, res) => {
    const data = req.body
    await Prodi.update(
        {
            name: data.name,
            idLecture: data.idLecture
        },
        {
            where: {
                prodi_Id: data.prodiId
            }
        }
    )
    .then(data => {
        if (data[0] === 0) {
            return res.status(400).json({
                message: "Could not find prodi"
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

const deleteProdi = async (req, res) => {
    await Prodi.destroy(
        {
            where: {
                prodi_Id: req.params.id
            }
        }
    )
    .then(data => {
        if (data[0] === 0) {
            return res.status(400).json({
                message: "Could not find prodi"
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
    getAllProdi,
    createProdi,
    updateProdi,
    deleteProdi
}
