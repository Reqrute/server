import {getConnection, sql,query} from "../database"

export const getBook = async (req,res) => {
    try {
       const pool = await getConnection();
       const result = await pool.request().query(query.getAllBook);
       res.json(result.recordset);
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };
 
 export const createBook = async (req,res) => {
 
   try {
      let {BName, PDate, Publisher, AId, GId,TId} = req.body;

      if(BName == null || Publisher == null || AId == null ||  GId == null|| TId== null){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }

      const pool = await getConnection();
   
       await pool.request()
      .input("BName", sql.NVarChar , BName)
      .input("PDate", sql.Date , PDate)
      .input("Publisher", sql.NVarChar , Publisher)
      .input("AId", sql.Int , AId)
      .input("GId", sql.Int , GId)
      .input("TId", sql.Int , TId)
      .query(query.addNewBook);

     
      const result = await pool.request().query(query.getAllBook);
      let arr = result.recordset;
      res.json(arr[arr.length-1]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
  };
 
  export const getBookById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getBookById)
 
        res.send(result.recordset[0]);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 }; 

 export const getBookByName = async (req,res) => {

   try {
      let {BName} = req.params;
         
      const pool = await getConnection();
      if(BName == 'null') BName = '';

   const result = await pool.request()
   .input("BName","%"+BName+"%")
   .query(query.getBookByName)
   res.send(result.recordset);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};
 
 export const getAllBookByAuthor = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getAllBookByAuthor)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const getBookByNameAndPublisher = async (req,res) => {

   try {
      let {BName, Publisher} = req.params;
         
      const pool = await getConnection();
      if(BName == 'null') BName = '';
      if(Publisher == 'null') Publisher = '';

   const result = await pool.request()
   .input("BName","%"+BName+"%")
   .input("Publisher","%"+Publisher+"%")
   .query(query.getBookByNameAndPublisher)
   res.send(result.recordset);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};
 
 export const deleteBookById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.deleteBook)
 
        res.sendStatus(204);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const UpdateBookById = async (req,res) => {
    try {
       const {BName, PDate, Publisher, AId, GId,TId} = req.body;
       const {id} = req.params;
 
       if(BName == null || Publisher == null || AId == null ||  GId == null|| TId== null){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }
    
       const pool = await getConnection();
    
       await pool.request()
       .input("BName", sql.NVarChar , BName)
       .input("PDate", sql.Date , PDate)
       .input("Publisher", sql.NVarChar , Publisher)
       .input("AId", sql.Int , AId)
       .input("GId", sql.Int , GId)
       .input("TId", sql.Int , TId)
       .input("Id",sql.Int,id)
       .query(query.updateBookById)
    
        res.json({id,BName, PDate, Publisher, AId, GId,TId});
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
