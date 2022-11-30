import {getConnection, sql,query} from "../database"

export const getSubscribe = async (req,res) => {
    try {
       const pool = await getConnection();
       const result = await pool.request().query(query.getAllSubscribe);
       res.json(result.recordset);
    } catch (error) {
       res.status(500);
       res.send(error.message)
    }
 };
 
 export const createSubscribe = async (req,res) => {
 
   try {
      let { TimeS, Cost, } = req.body;

      if(TimeS == null ||  Cost == null){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }

      const pool = await getConnection();
     
       await pool.request()
      .input("TimeS", sql.Int , TimeS)
      .input("Cost", sql.Decimal , Cost)
      .query(query.addNewSubscribe);

     
      const result = await pool.request().query(query.getAllSubscribe);
      let arr = result.recordset;
      res.json(arr[arr.length-1]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
  };
 
  export const getSubscribeById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.getSubscribeById)
 
        res.send(result.recordset[0]);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getAllSubscribeByLibraryId = async (req,res) => {
 
   try {
         const {id} = req.params;

         const pool = await getConnection();

       const result = await pool.request()
         .input('Id',id)
         .query(query.getAllSubscribeByLibraryId)

       res.send(result.recordset[0]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};
 
 export const deleteSubscribeById = async (req,res) => {
 
    try {
          const {id} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',id)
          .query(query.deleteSubscribe)
 
        res.sendStatus(204);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const UpdateSubscribeById = async (req,res) => {
    try {
       const {TimeS,  Cost} = req.body;
       const {id} = req.params;

       if(TimeS == null ||  Cost == null){
        return res.status(400).json({msg:'Bad Request. Please fill all fields'})
     }
   
       const pool = await getConnection();
    
       await pool.request()
       .input("TimeS", sql.Int , TimeS)
       .input("Cost", sql.Decimal , Cost)
       .input("Id",sql.Int,id)
       .query(query.updateSubscribeById)
    
        res.json({id,TimeS,Cost});
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
