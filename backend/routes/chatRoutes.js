const express = require("express");
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> backup-dd12d4e
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);
<<<<<<< HEAD
=======
=======
const { accessChat } = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(accessChat);
>>>>>>> 3ac5545 (Authentication DOne)
>>>>>>> backup-dd12d4e

module.exports = router;
