const Student = require('./StudentController');
const Lecture = require('./LectureController');
const Subject = require('./SubjectController');
const User = require('./UserController');

// Define associations between models here (similar to what was in the previous code)
app.use(express.json());

module.exports = {
    Student,
    Lecture,
    Subject,
    User
};