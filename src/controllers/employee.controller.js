import {getConnection, sql,query} from "../database"

export const getEmployer = async (req,res) => {
    try {
       const pool = await getConnection();
       const result = await pool.request().query(query.getAllEmployer);
       res.json(result.recordset);
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };
 
 export const createEmployer = async (req,res) => {
 
   try {
      let {AdrId,  SName, FName, LName,RRId} = req.body;

      if(AdrId == null  || RRId == null ||  SName == null|| FName== null || LName==null){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }

      const pool = await getConnection();
     
       await pool.request()
      .input("AdrId", sql.Int , AdrId)
      .input("RRId", sql.Int , RRId)
      .input("SName", sql.NVarChar , SName)
      .input("FName", sql.NVarChar , FName)
      .input("LName", sql.NVarChar , FName)
      .query(query.addNewEmployer);

     
      const result = await pool.request().query(query.getAllEmployer);
      let arr = result.recordset;
      res.json(arr[arr.length-1]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
  };
 
  export const getAllEmployerById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getAllEmployerById)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getAllEmployerByReadRoomId = async (req,res) => {
 
   try {
         const {id} = req.params;

         const pool = await getConnection();

       const result = await pool.request()
         .input('Id',id)
         .query(query.getAllEmployerByReadRoomId)

       res.send(result.recordset);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};
 
 export const deleteEmployerById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.deleteEmployer)
 
        res.sendStatus(204);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const UpdateEmployerById = async (req,res) => {
    try {
       const {AdrId,  SName, FName, LName,RRId} = req.body;
       const {id} = req.params;

       if(AdrId == null  || RRId == null ||  SName == null|| FName== null || LName==null){
        return res.status(400).json({msg:'Bad Request. Please fill all fields'})
     }
   
       const pool = await getConnection();
    
       await pool.request()
       .input("AdrId", sql.Int , AdrId)
       .input("RRId", sql.Int , RRId)
       .input("SName", sql.NVarChar , SName)
       .input("FName", sql.NVarChar , FName)
       .input("LName", sql.NVarChar , FName)
       .input("Id",sql.Int,id)
       .query(query.updateEmployerById)
    
        res.json({id,AdrId,  SName, FName, LName,RRId});
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
