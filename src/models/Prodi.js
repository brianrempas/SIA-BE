const db        = require('../config/db.config');
const Sequelize = require('sequelize');

const Prodi = db.define("prodi", {
    prodi_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idLecture: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
},{
    freezeTableName: true
});

module.exports = Prodi;