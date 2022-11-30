import {getConnection, sql,query} from "../database"

export const getReadingRoom = async (req,res) => {
    try {
       const pool = await getConnection();
       const result = await pool.request().query(query.getAllReadingRoom);
       res.json(result.recordset);
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };
 
 export const createReadingRoom = async (req,res) => {
 
   try {
      let {Number,LId} = req.body;

      if(Number == null|| LId == null){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }

      const pool = await getConnection();
     
       await pool.request()
      .input("Number", sql.Int , Number)
      .input("LId", sql.Int , LId)
      .query(query.addNewReadingRoom);

     
      const result = await pool.request().query(query.getAllReadingRoom);
      let arr = result.recordset;
      res.json(arr[arr.length-1]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
  };
 
  export const getReadingRoomById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getReadingRoomById)
 
        res.send(result.recordset[0]);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getAllReadingRoomByLibraryId = async (req,res) => {
 
   try {
         const {id} = req.params;

         const pool = await getConnection();

       const result = await pool.request()
         .input('Id',id)
         .query(query.getAllReadingRoomByLibraryId)

       res.send(result.recordset);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};
  
 export const deleteReadingRoomById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
          await pool.request()
          .input('Id',id)
          .query(query.deleteReadingRoom)
 
        res.sendStatus(204);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const UpdateReadingRoomById = async (req,res) => {
    try {
       const {Number, LId } = req.body;
       const {id} = req.params;

       if(Number == null|| LId == null){
        return res.status(400).json({msg:'Bad Request. Please fill all fields'})
     }
   
       const pool = await getConnection();
    
       await pool.request()
       .input("Number", sql.Int , Number)
       .input("LId", sql.Int , LId)
       .input("Id",sql.Int,id)
       .query(query.updateReadingRoomById)
    
        res.json({id,Number});
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
