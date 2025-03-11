const CommentModel = require("../models/commentModel");
const { v4: uuidv4 } = require('uuid');

const getCommentByHelpId = async (req, res) => {
    try {
        const helpid = req.params.id;
        const comment = await CommentModel.getCommentByHelpId(helpid);
        if(!comment) return res.status(404).json({ message: "No comment available" });
        res.json(comment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const createComment = async (req, res) => {
    try {
        const id = uuidv4();
        const { helpid, commenttext, commentedby } = req.body;
        const createdat = new Date();
      const newComment = await CommentModel.createComment(id, helpid, commenttext, commentedby, createdat);
      res.status(201).json(newComment);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  const deleteComment = async (req, res) => {
    try {
        const id = req.params.id;
      const success = await CommentModel.deleteComment(id);
      if (success) res.json({ message: "Comment deleted" });
      else res.status(404).json({ error: "Comment not found" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = { getCommentByHelpId, createComment, deleteComment };
