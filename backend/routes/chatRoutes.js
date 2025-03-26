const express = require("express");
<<<<<<< HEAD
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
=======
const { accessChat } = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(accessChat);
>>>>>>> 3ac5545 (Authentication DOne)

module.exports = router;
