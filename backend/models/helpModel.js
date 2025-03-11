const pool = require("../config/db");

const HelpModel =  {
    getAllHelp: async () => {
    const result = await pool.query("SELECT * FROM helps ORDER BY date, time");
    return result.rows;
  },

    getHelpById: async (id) => {
    const result = await pool.query("SELECT * FROM helps WHERE id = $1", [id]);
    return result.rows[0];
  },

    createHelp: async (id, title, description, date, time, location, category, urgencylevel, createdby, createdat ) => {
    const result = await pool.query(
      `INSERT INTO helps (id, title, description, date, time, location, category, urgencylevel, createdby, createdat)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [id, title, description, date, time, location, category, urgencylevel, createdby, createdat]
    );
    return result.rows[0];
  },

    updateHelp: async (id, title, description, date, time, location, category, urgencylevel) => {
    const result = await pool.query(
      `UPDATE helps SET title=$1, description=$2, date=$3, time=$4, location=$5, category=$6, urgencylevel=$7 
       WHERE id=$8 RETURNING *`,
      [title, description, date, time, location, category, urgencylevel, id]
    );
    return result.rows[0];
  },

    deleteHelp: async (id) => {
    const result = await pool.query("DELETE FROM helps WHERE id = $1 RETURNING *", [id]);
    return result.rowCount > 0;
  }
}

module.exports = HelpModel;
