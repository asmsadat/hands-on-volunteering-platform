const express = require("express");
const {getAllEvent, getEventById, createEvent, updateEvent, deleteEvent} = require("../controller/eventController");

const router = express.Router();

router.get("/", getAllEvent);
router.get("/:id", getEventById);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
