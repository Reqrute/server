import {getConnection, sql,query} from "../database"


export const getAuthor = async (req,res) => {
   try {
      const pool = await getConnection();
      const result = await pool.request().query(query.getAllAuthor);
      res.json(result.recordset);
   } catch (error) {
      res.status(500);
      res.send(error.message)
   }
};

export const createAuthor = async (req,res) => {

      try {
         let {SName, FName, LName, BDate, DDate} = req.body;

         if(SName == null || FName == null || LName == null || BDate == null){
            return res.status(400).json({msg:'Bad Request. Please fill all fields'})
         }

         const pool = await getConnection();
      
          await pool.request()
         .input("SName", sql.NVarChar , SName)
         .input("FName", sql.NVarChar , FName)
         .input("LName", sql.NVarChar , LName)
         .input("BDate", sql.Date , BDate)
         .input("DDate", sql.Date , DDate)
         .query(query.addNewAuthor);


         const result = await pool.request().query(query.getAllAuthor);

         let arr = result.recordset;
         res.json(arr[arr.length-1]);

      } catch (error) {
         res.status(500);
         res.send(error.message )
      }
 };

 export const getAuthorById = async (req,res) => {

   try {
         const {id} = req.params;

         const pool = await getConnection();

       const result = await pool.request()
         .input('Id',id)
         .query(query.getAuthorById)

       res.send(result.recordset[0]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};

 export const getAuthorReport = async (req,res) => {

   try {
         const {id} = req.params;

         const pool = await getConnection();

       const result = await pool.request()
         .input('Id',id)
         .query(query.getAuthorReport)

       res.send(result.recordset);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};


export const getAuthorByAll = async (req,res) => {

   try {
      let {SName, FName, LName} = req.params;
         
      const pool = await getConnection();
      if(SName == 'null') SName = '';
      if(FName == 'null') FName = '';
      if(LName == 'null') LName = '';

   const result = await pool.request()
   .input("SName","%"+SName+"%")
   .input("FName","%"+FName+"%")
   .input("LName","%"+LName+"%")
   .query(query.getAuthorByFIO)
   res.send(result.recordset);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};

export const deleteAuthorById = async (req,res) => {

   try {
         const {id} = req.params;

         const pool = await getConnection();

       const result = await pool.request()
         .input('Id',id)
         .query(query.deleteAuthor)

       res.sendStatus(204);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};

export const UpdateAuthorById = async (req,res) => {
   try {
        const {SName, FName, LName, BDate, DDate} = req.body;
      const {id} = req.params;

      if(SName == null || FName == null || LName == null || BDate == null){
        return res.status(400).json({msg:'Bad Request. Please fill all fields'})
     }
   
      const pool = await getConnection();
   
      await pool.request()
      .input("SName", sql.NVarChar , SName)
      .input("FName", sql.NVarChar , FName)
      .input("LName", sql.NVarChar , LName)
      .input("BDate", sql.Date , BDate)
      .input("DDate", sql.Date , DDate)
      .input("Id",sql.Int,id)
      .query(query.updateAuthorById)
   
      res.json({SName, FName, LName, BDate, DDate});
   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};