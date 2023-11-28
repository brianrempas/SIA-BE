const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const {
  studentRoutes,
  userRoutes,
  lectureRoutes,
  subjectRoutes,
  prodiRoutes,
  scheduleRoutes,
  scoreRoutes
} = require("./routes");

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON data
app.use(bodyParser.json()); // Parse JSON data (if needed)

app.use("/api/student", studentRoutes);
app.use("/api/user", userRoutes);
app.use("/api/lecture", lectureRoutes);
app.use("/api/subject", subjectRoutes);
app.use("/api/prodi", prodiRoutes);
app.use("/api/schedule", scheduleRoutes);
app.use("/api/score", scoreRoutes)

module.exports = app;
