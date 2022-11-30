import {getConnection, sql,query} from "../database"

export const getUserASub = async (req,res) => {
    try {
       const pool = await getConnection();
       const result = await pool.request().query(query.getAllUserASub);
       res.json(result.recordset);
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };
 
 export const createUserASub = async (req,res) => {
 
   try {
      let {CDate,SubId, RRId,UsId} = req.body;

      if(CDate == null || SubId == null || RRId == null || UsId == null){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }

      const pool = await getConnection();
     
       await pool.request()
      .input("CDate", sql.Date , CDate?.split("T")[0])
      .input("SubId", sql.Int , SubId)
      .input("UsId", sql.Int , UsId)
      .input("RRId", sql.Int , RRId)
      .query(query.addNewUserASub);

     
      const result = await pool.request().query(query.getAllUserASub);
      let arr = result.recordset;
      res.json(arr[arr.length-1]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
  };
 
  export const getAllUserASubBySubcribeId = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getAllUserASubBySubcribeId)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getAllUserASubByUserId = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getAllUserASubByUserId)
 
        res.send(result.recordset[0]);
 
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };

 export const getAllUserASubByReadingRoomId = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getAllUserASubByReadingRoomId)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const deleteUserASubById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.deleteUserASub)
 
        res.sendStatus(204);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const UpdateUserASubById = async (req,res) => {
    try {
    const {id} = req.params;
    let {CDate,SubId, RRId,UsId} = req.body;

    if(CDate == null || SubId == null || RRId == null || UsId == null){
       return res.status(400).json({msg:'Bad Request. Please fill all fields'})
    }
   
       const pool = await getConnection();
    
       await pool.request()
       .input("CDate", sql.Date , CDate?.split("T")[0])
       .input("SubId", sql.Int , SubId)
       .input("UsId", sql.Int , UsId)
       .input("RRId", sql.Int , RRId)
       .input("Id",sql.Int,id)
       .query(query.updateUserASubById)
    
        res.json({id,CDate,SubId, RRId,UsId});
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
