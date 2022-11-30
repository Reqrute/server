import { Router } from "express";
import {getQuery1,getQuery2,getQuery3,getQuery4,getQuery5,getQuery6,getQuery7,getQuery8,getQuery9,getQuery10} from "../controllers/query.controller";

const router = Router();

router.get('/Query1/:Special',getQuery1);

router.get('/Query2/:BName',getQuery2);

router.get('/Query3/:Publisher',getQuery3);

router.get('/Query4/:date1/:date2',getQuery4);

router.get('/Query5/:date1/:date2/:FName/:SName/:LName',getQuery5);

router.get('/Query6/:date1/:date2/:FName/:SName/:LName',getQuery6);

router.get('/Query7/:Id/:Shelf',getQuery7);

router.get('/Query8/:date1/:date2/:FName/:SName/:LName',getQuery8);

router.get('/Query9/:Id/:Number',getQuery9);

router.get('/Query10/:Name',getQuery10);

export default router