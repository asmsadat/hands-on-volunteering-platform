const UserModel = require("../models/userModel");
const VolunteerHistoryModel = require("../models/volunteerHistoryModel");

const getProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const userProfile = await UserModel.findById(id);
    res.json(userProfile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, skills, causes } = req.body;
    const updatedUser = await UserModel.updateUser(id, name, skills, causes);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getVolunteerHistory = async (req, res) => {
  try {
    const id = req.params.id;
    const history = await VolunteerHistoryModel.getHistoryByUserId(id);
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getProfile, updateProfile, getVolunteerHistory };
