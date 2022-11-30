import {getConnection, sql,query} from "../database"

 export const getQuery1 = async (req,res) => {

   try {
      let {Special} = req.params;
         
      const pool = await getConnection();
      if(Special == 'null') Special = '';

   const result = await pool.request()
   .input("Special",Special)
   .query(query.getQuery1)
   res.send(result.recordset);

   } catch (error) {
      res.status(500);
      res.send(error.message )
   }
};

export const getQuery2 = async (req,res) => {

    try {
       let {BName} = req.params;
          
       const pool = await getConnection();
       if(BName == 'null') BName = '';
 
    const result = await pool.request()
    .input("BName",BName)
    .query(query.getQuery2)
    res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
  
 export const getQuery3 = async (req,res) => {

    try {
       let {Publisher} = req.params;
          
       const pool = await getConnection();
       if(Publisher == 'null') Publisher = '';
 
    const result = await pool.request()
    .input("Publisher",Publisher)
    .query(query.getQuery3)
    res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getQuery4 = async (req,res) => {
 
    try {
          const {date1,date2} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Date1',date1)
          .input('Date2',date2)
          .query(query.getQuery4)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getQuery5 = async (req,res) => {
 
    try {
          let {date1,date2,FName,SName,LName} = req.params;
 
          const pool = await getConnection();
          if(FName == 'null') FName = '';
          if(SName == 'null') SName = '';
          if(LName == 'null') LName = '';
 
        const result = await pool.request()
          .input('Date1',date1)
          .input('Date2',date2)
          .input('FName',FName)
          .input('SName',SName)
          .input('LName',LName)
          .query(query.getQuery5)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };
 
 export const getQuery6 = async (req,res) => {
 
    try {
          let {date1,date2,FName,SName,LName} = req.params;
 
          const pool = await getConnection();
          if(FName == 'null') FName = '';
          if(SName == 'null') SName = '';
          if(LName == 'null') LName = '';
 
        const result = await pool.request()
          .input('Date1',date1)
          .input('Date2',date2)
          .input('FName',FName)
          .input('SName',SName)
          .input('LName',LName)
          .query(query.getQuery6)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getQuery7 = async (req,res) => {
 
    try {
          const {Id,Shelf} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',Id)
          .input('Shelf',Shelf)
          .query(query.getQuery7)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getQuery8 = async (req,res) => {
 
    try {
          let {date1,date2,FName,SName,LName} = req.params;
 
          const pool = await getConnection();
          if(FName == 'null') FName = '';
          if(SName == 'null') SName = '';
          if(LName == 'null') LName = '';
 
        const result = await pool.request()
          .input('Date1',date1)
          .input('Date2',date2)
          .input('FName',FName)
          .input('SName',SName)
          .input('LName',LName)
          .query(query.getQuery8)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getQuery9 = async (req,res) => {
 
    try {
          const {Id,Number} = req.params;
 
          const pool = await getConnection();
 
        const result = await pool.request()
          .input('Id',Id)
          .input('Number',Number)
          .query(query.getQuery9)
 
        res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };

 export const getQuery10 = async (req,res) => {

    try {
       let {Name} = req.params;
          
       const pool = await getConnection();
       if(Name == 'null') Name = '';
 
    const result = await pool.request()
    .input("Name",Name)
    .query(query.getQuery10)
    res.send(result.recordset);
 
    } catch (error) {
       res.status(500);
       res.send(error.message )
    }
 };


