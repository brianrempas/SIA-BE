const Student = require('./StudentController');
const Lecture = require('./LectureController');
const Subject = require('./SubjectController');
const User = require('./UserController');
const Prodi = require('./ProdiController')
const Schedule = require('./ScheduleController')
const Score = require('./ScoreController')

// Define associations between models here (similar to what was in the previous code)
app.use(express.json());

module.exports = {
    Student,
    Lecture,
    Subject,
    User,
    Prodi,
    Schedule,
    Score
};