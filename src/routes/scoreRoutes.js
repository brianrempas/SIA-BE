const express = require("express");
const ScoreController = require("../controllers/ScoreController");
const router = express.Router();
const { verifyToken } = require("../middleware/jwtToken");

router
  .route("/")
  .get(verifyToken, ScoreController.getAllScore)
  .post(verifyToken, ScoreController.createScore)
  .put(verifyToken, ScoreController.updateScore);

router.route("/:id").delete(verifyToken, ScoreController.deleteScore);
module.exports = router;
