const db        = require('../config/db.config');
const Sequelize = require('sequelize');

const Score = db.define("score", {
    score_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idStudent: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idProdi: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idSubject: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    input: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    freezeTableName: true,
    timestamps: false,
});

module.exports = Score;