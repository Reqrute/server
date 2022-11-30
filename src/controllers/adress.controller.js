import {getConnection, sql,query} from "../database"

export const getAddress = async (req,res) => {
    try {
       const pool = await getConnection();
       const result = await pool.request().query(query.getAllAddress);
       res.json(result.recordset);
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };
 
 export const createAddress = async (req,res) => {
 
   try {
      let {Street, NumberH, Flat} = req.body;

      if(Street == null|| NumberH == null  ){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }

      const pool = await getConnection();
     
       await pool.request()
      .input("Street", sql.NVarChar , Street)
      .input("NumberH", sql.Int , NumberH)
      .input("Flat", sql.Int , Flat)
      .query(query.addNewAddress);

     
      const result = await pool.request().query(query.getAllAddress);
      let arr = result.recordset;
      res.json(arr[arr.length-1]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
  };
 
  export const getAddressById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getAddressById)
 
        res.send(result.recordset[0]);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
  
 export const deleteAddressById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.deleteAddress)
 
        res.sendStatus(204);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const UpdateAddressById = async (req,res) => {
    try {
       const {Street, NumberH, Flat} = req.body;
       const {id} = req.params;

       if(Street == null|| NumberH == null ){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }
   
       const pool = await getConnection();
    
       await pool.request()
       .input("Street", sql.NVarChar , Street)
       .input("NumberH", sql.Int , NumberH)
       .input("Flat", sql.Int , Flat)
       .input("Id",sql.Int,id)
       .query(query.updateAddressById)
    
        res.json({id,Street, NumberH, Flat});
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
