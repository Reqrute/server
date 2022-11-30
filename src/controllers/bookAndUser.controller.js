import {getConnection, sql,query} from "../database"

export const getBookAUs = async (req,res) => {
    try {
       const pool = await getConnection();
       const result = await pool.request().query(query.getAllBookAUs);
       res.json(result.recordset);
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };
 
 export const createBookAUs = async (req,res) => {
 
   try {
      let {BId,TakenDate, RRId, UsId} = req.body;

      if(BId == null || RRId == null || UsId == null || TakenDate == null){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }

      const pool = await getConnection();
     
       await pool.request()
      .input("BId", sql.Int , BId)
      .input("UsId", sql.Int , UsId)
      .input("RRId", sql.Int , RRId)
      .input("TakenDate", sql.Date , TakenDate)
      .query(query.addNewBookAUs);

     
      const result = await pool.request().query(query.getAllBookAUs);
      let arr = result.recordset;
      res.json(arr[arr.length-1]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
  };
 
  export const getAllBookAUsByBookId = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getAllBookAUsByBookId)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getAllBookAUsByUserId = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getAllBookAUsByUserId)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getAllBookAUsByReadRoomId = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getAllBookAUsByReadRoomId)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const deleteBookAUsById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.deleteBookAUs)
 
        res.sendStatus(204);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const UpdateBookAUsById = async (req,res) => {
    try {
       const {BId,UsId,RRId,TakenDate} = req.body;
       const {id} = req.params;

       if(BId == null || RRId == null || UsId == null || TakenDate == null){
        return res.status(400).json({msg:'Bad Request. Please fill all fields'})
     }
   
       const pool = await getConnection();
    
       await pool.request()
       .input("BId", sql.Int , BId)
       .input("UsId", sql.Int , UsId)
       .input("RRId", sql.Int , RRId)
       .input("TakenDate", sql.Date , TakenDate)
       .input("Id",sql.Int,id)
       .query(query.updateBookAUsById)
    
        res.json({id,BId, TakenDate,UsId,RRId});
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
