import {getConnection, sql,query} from "../database"

export const getLibrary = async (req,res) => {
    try {
       const pool = await getConnection();
       const result = await pool.request().query(query.getAllLibrary);
       res.json(result.recordset);
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };
 
 export const createLibrary = async (req,res) => {
 
   try {
      let {NameL, Phone, AdrId, AmountOfR} = req.body;

      if(NameL == null ||  AdrId == null ||  AmountOfR== null){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }

      const pool = await getConnection();
   
       await pool.request()
      .input("NameL", sql.NVarChar , NameL)
      .input("Phone", sql.NVarChar , Phone)
      .input("AdrId", sql.Int , AdrId)
      .input("AmountOfR", sql.Int , AmountOfR)
      .query(query.addNewLibrary);

     
      const result = await pool.request().query(query.getAllLibrary);
      let arr = result.recordset;
      res.json(arr[arr.length-1]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
  };
 
  export const getLibraryReportp1 = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getLibraryReportp1)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getLibraryReportp2 = async (req,res) => {
 
   try {
         const {id,date1,date2} = req.params;

         console.log(date1);
         console.log(date2);

         const pool = await getConnection();

       const result = await pool.request()
         .input('Id',id)
         .input('Date1',date1)
         .input('Date2',date2)
         .query(query.getLibraryReportp2)

       res.send(result.recordset);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};

export const getLibraryReportp3 = async (req,res) => {
 
   try {
         const {id,date1,date2} = req.params;

         const pool = await getConnection();

       const result = await pool.request()
         .input('Id',id)
         .input('Date1',date1)
         .input('Date2',date2)
         .query(query.getLibraryReportp3)

       res.send(result.recordset);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};

export const getLibraryById = async (req,res) => {
 
   try {
         const {id} = req.params;

         const pool = await getConnection();

       const result = await pool.request()
         .input('Id',id)
         .query(query.getLibraryById)

       res.send(result.recordset[0]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};
 
 export const getLibraryByName = async (req,res) => {

   try {
      let {NameL} = req.params;
         
      const pool = await getConnection();
      if(NameL == 'null') NameL = '';

   const result = await pool.request()
   .input("NameL","%"+NameL+"%")
   .query(query.getLibraryByName)
   res.send(result.recordset);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};
 
 export const deleteLibraryById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.deleteLibrary)
 
        res.sendStatus(204);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const UpdateLibraryById = async (req,res) => {
    try {
       const {NameL, Phone, AdrId, AmountOfR} = req.body;
       const {id} = req.params;
 
       if(NameL == null ||  AdrId == null ||  AmountOfR== null){
        return res.status(400).json({msg:'Bad Request. Please fill all fields'})
     }
    
       const pool = await getConnection();
    
       await pool.request()
       .input("NameL", sql.NVarChar , NameL)
       .input("Phone", sql.NVarChar , Phone)
       .input("AdrId", sql.Int , AdrId)
       .input("AmountOfR", sql.Int , AmountOfR)
       .input("Id",sql.Int,id)
       .query(query.updateLibraryById)
    
        res.json({id,NameL, Phone, AdrId, AmountOfR});
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
