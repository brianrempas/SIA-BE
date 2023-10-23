const db        = require('../config/db.config');
const Sequelize = require('sequelize');

const Lecture = db.define("lecture", {
    lecture_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nip: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
},{
    freezeTableName: true
});

module.exports = Lecture;