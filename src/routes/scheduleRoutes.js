const express = require("express");
const ScheduleController = require("../controllers/ScheduleController");
const router = express.Router();
const { verifyToken } = require("../middleware/jwtToken");

router
  .route("/")
  .get(verifyToken, ScheduleController.getAllSchedule)
  .post(verifyToken, ScheduleController.createSchedule)
  .put(verifyToken, ScheduleController.updateSchedule);

router.route("/:id").delete(verifyToken, ScheduleController.deleteSchedule);
module.exports = router;
