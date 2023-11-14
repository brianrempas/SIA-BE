const express = require("express");
const userController = require("../controllers/UserController");
const router = express.Router();

const { verifyToken } = require("../middleware/jwtToken");

router.route("/").get(verifyToken, userController.getAllUsers);

router.route("/login").post(userController.logInUser);
router.route("/register").post(userController.createUser);

router
  .route("/:id")
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
