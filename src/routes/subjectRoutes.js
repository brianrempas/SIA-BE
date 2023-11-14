const express = require("express");
const subjectController = require("../controllers/SubjectController");

const router = express.Router();
const { verifyToken } = require("../middleware/jwtToken");

router
  .route("/")
  .get(verifyToken, subjectController.getAllSubjects)
  .post(verifyToken, subjectController.createSubject)
  .put(verifyToken, subjectController.updateSubject);

router.route("/:id").delete(verifyToken, subjectController.deleteSubject);
module.exports = router;
