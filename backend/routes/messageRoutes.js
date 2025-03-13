const express = require("express");
const router = express.Router();
const { getMessagesByUserId, createMessage } = require("../controller/messageController");

router.get("/:id", getMessagesByUserId);
router.post("/", createMessage);

module.exports = router;