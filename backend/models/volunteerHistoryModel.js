const pool = require("../config/db");

const VolunteerHistoryModel = {
    getHistoryByUserId: async(userId) => {
    const result = await pool.query("SELECT * FROM volunteer_history WHERE userid = $1", [userId]);
    return result.rows;
  },

    addEntry: async(id, userId, eventId, contribution) => {
    const result = await pool.query(
      `INSERT INTO volunteer_history (id, userid, eventid, contribution) VALUES ($1, $2, $3, $4) RETURNING *`,
      [id, userId, eventId, contribution]
    );
    return result.rows[0];
  }
}

module.exports = VolunteerHistoryModel;