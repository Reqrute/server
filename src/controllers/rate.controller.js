import {getConnection, sql,query} from "../database"


export const getRate = async (req,res) => {
   try {
      const pool = await getConnection();
      const result = await pool.request().query(query.getAllRate);
      res.json(result.recordset);
   } catch (error) {
      res.status(500);
      res.send(error.message)
   }
};

export const createRate = async (req,res) => {

      try {
         const {RateN, Comment} = req.body;

         if(RateN == null || Comment == null){
            return res.status(400).json({msg:'Bad Request. Please fill all fields'})
         }
      
         const pool = await getConnection();
      
         await pool.request()
         .input("RateN", sql.Int , RateN)
         .input("Comment", sql.NVarChar , Comment)
         .query(query.addNewRate);

         const result = await pool.request()
         .input('RateN', RateN)
         .input("Comment", Comment)
         .query(query.getRateByAll);

         let arr = result.recordset;
         res.json(arr[arr.length-1]);
      } catch (error) {
         res.status(500);
         res.send(error.message )
      }
 };

 export const getRateById = async (req,res) => {

   try {
         const {id} = req.params;

         const pool = await getConnection();

       const result = await pool.request()
         .input('Id',id)
         .query(query.getRateById)

       res.send(result.recordset[0]);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};

export const deleteRateById = async (req,res) => {

   try {
         const {id} = req.params;

         const pool = await getConnection();

        await pool.request()
         .input('Id',id)
         .query(query.deleteRate)

       res.sendStatus(204);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};

export const UpdateRateById = async (req,res) => {
   try {
      const { RateN, Comment } = req.body;
      const {id} = req.params;

      if(RateN == null || Comment == null){
         return res.status(400).json({msg:'Bad Request. Please fill all fields'})
      }
   
      const pool = await getConnection();
   
      await pool.request()
      .input("RateN", sql.Int , RateN)
      .input("Comment", sql.NVarChar , Comment)
      .input("Id",sql.Int,id)
      .query(query.updateRateById)
   
       res.json({id, RateN, Comment});
   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};