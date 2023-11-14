const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const {
  studentRoutes,
  userRoutes,
  lectureRoutes,
  subjectRoutes,
} = require("./routes");

app.use(cors("*")); // Enable CORS
app.use(express.json()); // Parse JSON data
app.use(bodyParser.json()); // Parse JSON data (if needed)

app.use("/api/student", studentRoutes);
app.use("/api/user", userRoutes);
app.use("/api/lecture", lectureRoutes);
app.use("/api/subject", subjectRoutes);

module.exports = app;
