import {getConnection, sql,query} from "../database"

export const getGenre = async (req,res) => {
    try {
       const pool = await getConnection();
       const result = await pool.request().query(query.getAllGenre);
       res.json(result.recordset);
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };
 
 
  export const getGenreById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getGenreById)
 
        res.send(result.recordset[0]);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };