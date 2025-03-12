const pool = require("../config/db");

const UserModel = {
  findByEmail: async (email) => {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return result.rows[0];
  },

  createUser: async (id, name, email, hashedPassword) => {
    const result = await pool.query(
      `INSERT INTO users (id, name, email, password) 
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [id, name, email, hashedPassword]
    );
    return result.rows[0];
  },

  findById: async (id) => {
    const result = await pool.query(
      "SELECT id, name, email, skills, causes, createdAt FROM users WHERE id = $1",
      [id]
    );
    return result.rows[0];
  },

  updateUser: async (id, user) => {
    const { name, skills, causes } = user;
    const result = await pool.query(
      `UPDATE users SET name = $1, skills = $2, causes = $3 WHERE id = $4 RETURNING *`,
      [name, skills, causes, id]
    );
    return result.rows[0];
  },
};

module.exports = UserModel;
