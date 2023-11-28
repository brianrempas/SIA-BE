const db        = require('../config/db.config');
const Sequelize = require('sequelize');

const Schedule = db.define("schedule", {
    schedule_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idProdi: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idSubject: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    day: {
        type: Sequelize.STRING,
        allowNull: false
    },
    timeStart: {
        type: Sequelize.STRING,
        allowNull: false
    },
    timeEnd: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    freezeTableName: true
});

module.exports = Schedule;