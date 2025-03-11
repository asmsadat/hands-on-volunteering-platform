const HelpModel = require("../models/helpModel");
const { v4: uuidv4 } = require("uuid");

const getAllHelp = async (req, res) => {
  try {
    const helps = await HelpModel.getAllHelp();
    res.json(helps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getHelpById = async (req, res) => {
  try {
    const id = req.params.id;
    const help = await HelpModel.getHelpById(id);
    if (!help) return res.status(404).json({ error: "Help post not found" });
    res.json(help);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createHelp = async (req, res) => {
  try {
    const id = uuidv4();
    const {
      title,
      description,
      date,
      time,
      location,
      category,
      urgencylevel,
      createdby,
    } = req.body;
    const createdat = new Date();
    const newHelp = await HelpModel.createHelp(
      id,
      title,
      description,
      date,
      time,
      location,
      category,
      urgencylevel,
      createdby,
      createdat
    );
    res.status(201).json(newHelp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateHelp = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, date, time, location, category, urgencylevel } =
      req.body;
    const updatedHelp = await HelpModel.updateHelp(
      id,
      title,
      description,
      date,
      time,
      location,
      category,
      urgencylevel
    );

    if (!updatedHelp) {
      return res.status(404).json({ message: "Help post not found" });
    }

    res.json(updatedHelp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteHelp = async (req, res) => {
  try {
    const id = req.params.id;
    const success = await HelpModel.deleteHelp(id);
    if (success) res.json({ message: "Help post deleted" });
    else res.status(404).json({ error: "Help post not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addComment = async (req, res) => {
  try {
    const id = req.params.id;
    const { commentText } = req.body;
    const updatedHelp = await HelpModel.addComment(id, commentText);
    res.json(updatedHelp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const removeComment = async (req, res) => {
  try {
    const id = req.params.id;
    const { commentText } = req.body;
    const updatedHelp = await HelpModel.removeComment(id, commentText);
    res.json(updatedHelp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllHelp,
  getHelpById,
  createHelp,
  updateHelp,
  deleteHelp,
  addComment,
  removeComment,
};
