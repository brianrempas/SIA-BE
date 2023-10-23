const db        = require('../config/db.config');
const Sequelize = require('sequelize');

const User = db.define("user", {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    lecture_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.ENUM('student','lecture'),
        allowNull: false
    },
},{
    freezeTableName: true
});

module.exports = User;