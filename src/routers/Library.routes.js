import { Router } from "express";
import { getLibrary, createLibrary,getLibraryById,deleteLibraryById,UpdateLibraryById, getLibraryByName,getLibraryReportp1,getLibraryReportp2,getLibraryReportp3} from "../controllers/library.controller";

const router = Router();

router.put('/Library/:id',UpdateLibraryById);

router.get('/Library',getLibrary);

router.post('/Library',createLibrary);

router.delete('/Library/:id',deleteLibraryById);

router.get('/Library/:id',getLibraryById);

router.get('/Library/Report1/:id',getLibraryReportp1);

router.get('/Library/Report2/:id/:date1/:date2',getLibraryReportp2);

router.get('/Library/Report3/:id/:date1/:date2',getLibraryReportp3);

router.get('/Library/Name/:NameL',getLibraryByName);

export default router