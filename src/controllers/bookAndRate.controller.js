import {getConnection, sql,query} from "../database"

export const getBookARate = async (req,res) => {
    try {
       const pool = await getConnection();
       const result = await pool.request().query(query.getAllBookARate);
       res.json(result.recordset);
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };
 
 export const createBookARate = async (req,res) => {
 
   try {
      let {BId, RId, UsId} = req.body;

      if(BId == null || RId == null || UsId == null){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }

      const pool = await getConnection();
     
       await pool.request()
      .input("BId", sql.Int , BId)
      .input("UsId", sql.Int , UsId)
      .input("RId", sql.Int , RId)
      .query(query.addNewBookARate);

     
      const result = await pool.request().query(query.getAllBookARate);
      let arr = result.recordset;
      res.json(arr[arr.length-1]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
  };
 
  export const getAllBookARateByBookId = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getAllBookARateByBookId)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getAllBookARateByUserId = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getAllBookARateByUserId)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getAllBookARateByRateId = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getAllBookARateByRateId)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const deleteBookARateById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.deleteBookARate)
 
        res.sendStatus(204);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const UpdateBookARateById = async (req,res) => {
    try {
       const {BId, RId,UsId} = req.body;
       const {id} = req.params;

       if(BId == null || RId == null || UsId == null){
        return res.status(400).json({msg:'Bad Request. Please fill all fields'})
     }
   
       const pool = await getConnection();
    
       await pool.request()
       .input("BId", sql.Int , BId)
       .input("UsId", sql.Int , UsId)
       .input("RId", sql.Int , RId)
       .input("Id",sql.Int,id)
       .query(query.updateBookARateById)
    
        res.json({id,BId, RId,UsId});
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
