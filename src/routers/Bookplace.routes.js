import { Router } from "express";
import { getBookSit, createBookSit,deleteBookSitById,UpdateBookSitById,getAllBookSitByBookId,getAllBookSitByReadRoomId,getAllBookSitById} from "../controllers/bookplace.controller";

const router = Router();

router.put('/Bookplace/:id',UpdateBookSitById);

router.get('/Bookplace',getBookSit);

router.post('/Bookplace',createBookSit);

router.delete('/Bookplace/:id',deleteBookSitById);

router.get('/Bookplace/:id',getAllBookSitById);

router.get('/Bookplace/Book/:id',getAllBookSitByBookId);

router.get('/Bookplace/ReadRoom/:id',getAllBookSitByReadRoomId);

export default router