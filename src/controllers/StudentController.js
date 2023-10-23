const Student = require("../models/Student");

const getAllStudents = async (req, res) => {
    await Student.findAll()
    .then(data => {
        if(!data.length) {
            return res.status(200).json({
                status: 'success',
                message: 'data is empty',
                data: data
            });
        }

        res.status(200).json({
            status: 'success',
            data: data
        });
    })
    .catch((error) => {
        res.status(400).json({
            status: 'fail',
            message: "error when get all data"
        });
    });
}

module.exports = {
    getAllStudents
}