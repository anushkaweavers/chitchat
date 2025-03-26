const express = require("express");
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> backup-dd12d4e
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);
<<<<<<< HEAD
=======
=======
const { registerUser, authUser } = require("../controllers/userControllers");

const router = express.Router();

>>>>>>> 3ac5545 (Authentication DOne)
>>>>>>> backup-dd12d4e
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
