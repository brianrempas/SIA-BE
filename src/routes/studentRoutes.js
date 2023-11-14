const express = require("express");
const studentController = require("../controllers/StudentController");

const router = express.Router();
const { verifyToken } = require("../middleware/jwtToken");

router
  .route("/")
  .get(verifyToken, studentController.getAllStudents)
  .post(verifyToken, studentController.createStudent)
  .put(verifyToken, studentController.updateStudent)
  

  router.route("/:id").delete(verifyToken, studentController.deleteStudent);

  module.exports = router;

