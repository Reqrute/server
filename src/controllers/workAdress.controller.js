import {getConnection, sql,query} from "../database"

export const getWorkAddress = async (req,res) => {
    try {
       const pool = await getConnection();
       const result = await pool.request().query(query.getAllWorkAddress);
       res.json(result.recordset);
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };
 
 export const createWorkAddress = async (req,res) => {
 
   try {
      let {Street, NumberH, Special} = req.body;

      if(Street == null|| NumberH == null || Special == null ){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }

      const pool = await getConnection();
     
       await pool.request()
      .input("Street", sql.NVarChar , Street)
      .input("NumberH", sql.Int , NumberH)
      .input("Special", sql.NVarChar , Special)
      .query(query.addNewWorkAddress);

     
      const result = await pool.request().query(query.getAllWorkAddress);
      let arr = result.recordset;
      res.json(arr[arr.length-1]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
  };
 
  export const getWorkAddressById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getWorkAddressById)
 
        res.send(result.recordset[0]);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
  
 export const deleteWorkAddressById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
          await pool.request()
          .input('Id',id)
          .query(query.deleteWorkAddress)
 
        res.sendStatus(204);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const UpdateWorkAddressById = async (req,res) => {
    try {
       const {Street, NumberH, Special} = req.body;
       const {id} = req.params;

       if(Street == null|| NumberH == null || Special == null ){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }
   
       const pool = await getConnection();
    
       await pool.request()
       .input("Street", sql.NVarChar , Street)
       .input("NumberH", sql.Int , NumberH)
       .input("Special", sql.NVarChar , Special)
       .input("Id",sql.Int,id)
       .query(query.updateWorkAddressById)
    
        res.json({id,Street, NumberH, Special});
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
