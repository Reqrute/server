import {getConnection, sql,query} from "../database"

export const getBookSit = async (req,res) => {
    try {
       const pool = await getConnection();
       const result = await pool.request().query(query.getAllBookSit);
       res.json(result.recordset);
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };
 
 export const createBookSit = async (req,res) => {
 
   try {
      let {BId, RRId, Shelving,Shelf} = req.body;

      if(BId == null || RRId == null || Shelving == null || Shelf == null){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }

      const pool = await getConnection();
     
       await pool.request()
      .input("BId", sql.Int , BId)
      .input("Shelving", sql.Int , Shelving)
      .input("RRId", sql.Int , RRId)
      .input("Shelf", sql.Int , Shelf)
      .query(query.addNewBookSit);

     
      const result = await pool.request().query(query.getAllBookSit);
      let arr = result.recordset;
      res.json(arr[arr.length-1]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
  };

  export const getAllBookSitById = async (req,res) => {
 
   try {
         const {id} = req.params;

         const pool = await getConnection();

       const result = await pool.request()
         .input('Id',id)
         .query(query.getAllBookSitById)

       res.send(result.recordset);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};
 
  export const getAllBookSitByBookId = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getAllBookSitByBookId)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getAllBookSitByReadRoomId = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getAllBookSitByReadRoomId)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const deleteBookSitById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.deleteBookSit)
 
        res.sendStatus(204);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const UpdateBookSitById = async (req,res) => {
    try {
       const {BId,Shelving,RRId,Shelf} = req.body;
       const {id} = req.params;

       if(BId == null || RRId == null || Shelving == null  || Shelf == null){
        return res.status(400).json({msg:'Bad Request. Please fill all fields'})
     }
   
       const pool = await getConnection();
    
       await pool.request()
       .input("BId", sql.Int , BId)
       .input("Shelving", sql.Int , Shelving)
       .input("RRId", sql.Int , RRId)
       .input("Shelf", sql.Int , Shelf)
       .input("Id",sql.Int,id)
       .query(query.updateBookSitById)
    
        res.json({id,BId,Shelving,RRId,Shelf});
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
