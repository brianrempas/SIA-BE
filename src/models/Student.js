const db        = require('../config/db.config');
const Sequelize = require('sequelize');

const Student = db.define("student", {
    student_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nim: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idProdi: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    gender: {
        type: Sequelize.ENUM('Male','Female'),
        allowNull: false
    }
},{
    freezeTableName: true
});

module.exports = Student;