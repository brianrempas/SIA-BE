const Student = require("../models/Student");

const getAllStudents = async (req, res) => {
    await Student.findAll()
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

const createStudent = async (req, res) => {
    const data = req.body
    const uniqueNumber = (Math.floor(Math.random() * 100) + 1).toString();
    //const nim = data.year_in + uniqueNumber // sementara
    await Student.create({
        name: data.name,
        email: data.email,
        nim: data.nim
    })
    .then(data => {
        res.status(201).json({
            result: data
        });
    })
    .catch((error) => {
        res.status(400).json({
            message: "error when creating data = " + error
        });
    });
}

const updateStudent = async (req, res) => {
    const data = req.body
    const uniqueNumber = (Math.floor(Math.random() * 100) + 1).toString();
    const nim = data.year_in + uniqueNumber // sementara
    await Student.update(
        {
            name: data.name,
            email: data.email,
            nim: data.nim
        },
        {
            where: {
                student_id: data.studentId // Use student_id as the condition
            }
        }
    )

    .then(data => {
        if (data[0] === 0) {
            return res.status(400).json({
                message: "Could not find the student"
            });
        } 
        
        res.status(201).json({
            result: data[0]
        });
    })
    .catch((error) => {
        res.status(400).json({
            message: "error when updating data = " + error
        });
    });
}

const deleteStudent = async (req, res) => {
    await Student.destroy(
        {
            where: {
                student_id: req.params.id
            }
        }
    )

    .then(data => {
        if (data[0] === 0) {
            return res.status(400).json({
                message: "Could not find the lecturer",
            });
        } 
        
        res.status(201).json({
            result: data
        });
    })
    .catch((error) => {
        res.status(400).json({
            message: "error when deleting data = " + error
        });
    });
}

module.exports = {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent
}
