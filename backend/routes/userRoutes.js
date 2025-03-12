const express = require("express");
const { getProfile, updateProfile, getVolunteerHistory } = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/profile/:id", authMiddleware, getProfile);
router.put("/profile/:id", authMiddleware, updateProfile);
router.get("/history/:id", authMiddleware, getVolunteerHistory);

module.exports = router;
