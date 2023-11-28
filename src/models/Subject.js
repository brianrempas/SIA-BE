const db        = require('../config/db.config');
const Sequelize = require('sequelize');

const Subject = db.define("subject", {
    subject_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idProdi: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sks: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
},{
    freezeTableName: true
});

module.exports = Subject;