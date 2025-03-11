const express = require("express");
const { getCommentByHelpId, createComment, deleteComment } = require("../controller/commentController");

const router = express.Router();

router.get("/:id", getCommentByHelpId);
router.post("/", createComment);
router.delete("/:id", deleteComment);

module.exports = router;