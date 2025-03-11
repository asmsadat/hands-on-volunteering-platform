const EventModel = require("../models/eventModel");
const { v4: uuidv4 } = require("uuid");

const getAllEvent = async (req, res) => {
  try {
    const events = await EventModel.getAllEvent();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getEventById = async (req, res) => {
  try {
    const id = req.params.id;
    const event = await EventModel.getEventById(id);
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createEvent = async (req, res) => {
  try {
    const {title, description, date, time, location, category, createdBy} = req.body;
    const id = uuidv4();
    const createdAt = new Date();
    const newEvent = await EventModel.createEvent(id, title, description, date, time, location, category, createdBy, createdAt);
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const {title, description, date, time, location, category} = req.body;
    const updatedEvent = await EventModel.updateEvent(id, title, description, date, time, location, category);
    
    if (!updatedEvent) {
        return res.status(404).json({ message: "Event not found" });
      }

    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const id = req.params.id;
    const success = await EventModel.deleteEvent(id);
    if (success) res.json({ message: "Event deleted" });
    else res.status(404).json({ error: "Event not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllEvent,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
};
