const pool = require("../config/db");

const CommentModel = {
    getCommentByHelpId: async (helpid) => {
        const result = await pool.query("SELECT * FROM comments WHERE helpid = $1 ORDER BY createdAt", [helpid]);
        return result.rows;
    },
  
    createComment: async (id, helpid, commenttext, commentedby, createdat) => {
      const result = await pool.query(
        `INSERT INTO comments (id, helpid, commenttext, commentedby, createdat) 
         VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [id, helpid, commenttext, commentedby, createdat]
      );
      return result.rows[0];
    },
  
    deleteComment: async (id) => {
      const result = await pool.query("DELETE FROM comments WHERE id = $1 RETURNING *", [id]);
      return result.rowCount > 0;
    }
  }
  
  module.exports = CommentModel;
  