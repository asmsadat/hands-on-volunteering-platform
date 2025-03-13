const Message = require("../models/messageModel");
const { v4: uuidv4 } = require('uuid');

const getMessagesByUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const messages = await Message.getMessagesByUserId(id);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createMessage = async (req, res) => {
  try {
    const id = uuidv4();
    const { content, sender, receiver } = req.body;
    const newMessage = await Message.createMessage(id, content, sender, receiver);
    res.json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getMessagesByUserId, createMessage }