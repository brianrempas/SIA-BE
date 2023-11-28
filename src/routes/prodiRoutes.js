const express = require("express");
const ProdiController = require("../controllers/ProdiController");
const router = express.Router();
const { verifyToken } = require("../middleware/jwtToken");

router
  .route("/")
  .get(verifyToken, ProdiController.getAllProdi)
  .post(verifyToken, ProdiController.createProdi)
  .put(verifyToken, ProdiController.updateProdi);

router.route("/:id").delete(verifyToken, ProdiController.deleteProdi);
module.exports = router;
