const express = require("express");
const {getAllHelp,getHelpById,createHelp,updateHelp,deleteHelp,addComment,removeComment} = require("../controller/helpController");

const router = express.Router();

router.get("/", getAllHelp);
router.get("/:id", getHelpById);
router.post("/", createHelp);
router.put("/:id", updateHelp);
router.delete("/:id", deleteHelp);

// Comment management
router.post("/:id/comments", addComment);
router.delete("/:id/comments", removeComment);

module.exports = router;

