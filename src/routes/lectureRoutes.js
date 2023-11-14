const express = require("express");
const lectureController = require("../controllers/LectureController");
const router = express.Router();
const { verifyToken } = require("../middleware/jwtToken");

router
  .route("/")
  .get(verifyToken, lectureController.getAllLecture)
  .post(verifyToken, lectureController.createLecture)
  .put(verifyToken, lectureController.updateLecture);

router.route("/:id").delete(verifyToken, lectureController.deleteLecture);
module.exports = router;
