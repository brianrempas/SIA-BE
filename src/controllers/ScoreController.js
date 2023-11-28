const Score = require("../models/Score");

const getAllScore = async (req, res) => {
    await Score.findAll()
        .then(data => {
            if (!data.length) {
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

const createScore = async (req, res) => {
    try {
        const dataArray = req.body;

        const createdRecords = await Promise.all(dataArray.map(async (data) => {
            const result = await Score.create({
                idStudent: data.idStudent,
                idProdi: data.idProdi,
                idSubject: data.idSubject,
                input: data.input,
            });

            return result;
        }));

        res.status(201).json({
            result: createdRecords
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: "Error when creating data: " + error.message
        });
    }
};


const updateScore = async (req, res) => {
    const dataArray = req.body;

    try {
        const updatedRecords = [];

        for (const data of dataArray) {
            const [numberOfAffectedRows, updatedScore] = await Score.update(
                {
                    idStudent: data.idStudent,
                    idProdi: data.idProdi,
                    idSubject: data.idSubject,
                    input: data.input,
                },
                {
                    where: {
                        score_Id: data.scoreId
                    },
                    returning: true, 
                }
            );

            if (numberOfAffectedRows === 0) {
                return res.status(400).json({
                    message: `Could not find the score with scoreId: ${data.scoreId}`
                });
            }

            updatedRecords.push(updatedScore[0]); // Push the updated record to the array
        }

        res.status(201).json({
            result: updatedRecords
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error when updating data"
        });
    }
}

const deleteScore = async (req, res) => {
    await Score.destroy(
        {
            where: {
                score_Id: req.params.id
            }
        }
    )
        .then(data => {
            if (data[0] === 0) {
                return res.status(400).json({
                    message: "Could not find the score"
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
    getAllScore,
    createScore,
    updateScore,
    deleteScore
}
