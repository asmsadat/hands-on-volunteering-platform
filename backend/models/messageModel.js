const pool = require("../config/db");

const Message = {
   getMessagesByUserId: async(id) => {
    const { rows } = await pool.query("SELECT * FROM messages WHERE sender = $1", [id]);
    return rows;
  },
  createMessage: async(id, content, sender, receiver) => {
    const { rows } = await pool.query(
      "INSERT INTO messages (id, content, sender, receiver) VALUES ($1, $2, $3, $4) RETURNING *",
      [id, content, sender, receiver]
    );
    return rows[0];
  },
};

module.exports = Message;