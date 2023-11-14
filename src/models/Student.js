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
},{
    freezeTableName: true
});

module.exports = Student;