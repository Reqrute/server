import {getConnection, sql,query} from "../database"

export const getClient = async (req,res) => {
    try {
       const pool = await getConnection();
       const result = await pool.request().query(query.getAllClient);
       res.json(result.recordset);
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };
 
 export const createClient = async (req,res) => {
 
   try {
      let {AId,AddresW, SName, FName,LName} = req.body;

      if(AId == null || AddresW == null || SName == null ||  FName == null|| LName== null){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }

      const pool = await getConnection();
     
       await pool.request()
      .input("AId", sql.Int , AId)
      .input("AddresW", sql.Int , AddresW)
      .input("SName", sql.NVarChar , SName)
      .input("FName", sql.NVarChar , FName)
      .input("LName", sql.NVarChar , LName)
      .query(query.addNewClient);

     
      const result = await pool.request().query(query.getAllClient);
      let arr = result.recordset;
      res.json(arr[arr.length-1]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
  };
 
  export const getClientById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getClientById)
 
        res.send(result.recordset[0]);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const getClientByFIO = async (req,res) => {

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
   .query(query.getClientByFIO)
   res.send(result.recordset);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};
 
 export const deleteClientById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.deleteClient)
 
        res.sendStatus(204);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const UpdateClientById = async (req,res) => {
    try {
       const {AId,AddresW, SName, FName,LName} = req.body;
       const {id} = req.params;

       if(AId == null||  AddresW == null || SName == null ||  FName == null|| LName== null){
          return res.status(400).json({msg:'Bad Request. Please fill all fields'})
       }
   
       const pool = await getConnection();
    
       await pool.request()
       .input("AId", sql.Int , AId)
       .input("AddresW", sql.Int , AddresW)
       .input("SName", sql.NVarChar , SName)
       .input("FName", sql.NVarChar , FName)
       .input("LName", sql.NVarChar , LName)
       .input("Id",sql.Int,id)
       .query(query.updateClientById)
    
        res.json({id,AId, AddresW, SName, FName,LName});
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
