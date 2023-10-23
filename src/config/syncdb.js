const db = require('../config/db.config');
const models = require('../models');



async function syncDatabase() {
  try {
    await db.sync();
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
}

syncDatabase();