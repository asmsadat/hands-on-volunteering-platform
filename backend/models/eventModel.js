const pool = require("../config/db");

const EventModel = {
  getAllEvent: async () => {
    const result = await pool.query("SELECT * FROM events ORDER BY date, time");
    return result.rows;
  },

  getEventById: async (id) => {
    const result = await pool.query("SELECT * FROM events WHERE id = $1", [id]);
    return result.rows[0];
  },

  createEvent: async (
    id,
    title,
    description,
    date,
    time,
    location,
    category,
    createdBy,
    createdAt
  ) => {
    const result = await pool.query(
      `INSERT INTO events (id, title, description, date, time, location, category, "createdBy", "createdAt")
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [
        id,
        title,
        description,
        date,
        time,
        location,
        category,
        createdBy,
        createdAt,
      ]
    );
    return result.rows[0];
  },

  updateEvent: async (
    id,
    title,
    description,
    date,
    time,
    location,
    category
  ) => {
    const result = await pool.query(
      `UPDATE events SET title=$1, description=$2, date=$3, time=$4, location=$5, category=$6 
       WHERE id=$7 RETURNING *`,
      [title, description, date, time, location, category, id]
    );
    return result.rows[0];
  },

  deleteEvent: async (id) => {
    const result = await pool.query(
      "DELETE FROM events WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  },
};

module.exports = EventModel;
