import {getConnection, sql,query} from "../database"

export const getType = async (req,res) => {
    try {
       const pool = await getConnection();
       const result = await pool.request().query(query.getAllType);
       res.json(result.recordset);
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };
 
 
  export const getTypeById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getTypeById)
 
        res.send(result.recordset[0]);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };