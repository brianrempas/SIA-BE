const Lecture = require("../models/Lecture");

const getAllLecture = async (req, res) => {
    await Lecture.findAll()
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

const createLecture = async (req, res) => {
    var data = req.body
    const uniqueNumber = (Math.floor(Math.random() * 100) + 1).toString().padStart(2, '0');
    const nip = data.yearIn + uniqueNumber // sementara
    await Lecture.create({
        name: data.name,
        email: data.email,
        nip: nip,
        gender: data.gender
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

const updateLecture = async (req, res) => {
    const data = req.body
    const uniqueNumber = (Math.floor(Math.random() * 100) + 1).toString().padStart(2, '0');
    const nip = data.yearIn + uniqueNumber // sementara
    await Lecture.update(
        {
            name: data.name,
            email: data.email,
            nip: nip,
            gender: data.gender
        },
        {
            where: {
                lecture_Id: data.lectureId
            }
        }
    )
    .then(data => {
        if (data[0] === 0) {
            return res.status(400).json({
                message: "Could not find the lecturer"
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

const deleteLecture = async (req, res) => {
    await Lecture.destroy(
        {
            where: {
                lecture_Id: req.params.id
            }
        }
    )
    .then(data => {
        if (data[0] === 0) {
            return res.status(400).json({
                message: "Could not find the lecturer"
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
    getAllLecture,
    createLecture,
    updateLecture,
    deleteLecture
}
