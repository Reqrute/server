import { Router } from "express";
import { getBook, createBook,getBookById,deleteBookById,UpdateBookById, getBookByNameAndPublisher,getAllBookByAuthor,getBookByName} from "../controllers/book.controller";

const router = Router();

router.put('/Book/:id',UpdateBookById);

router.get('/Book',getBook);

router.post('/Book',createBook);

router.delete('/Book/:id',deleteBookById);

router.get('/Book/:id',getBookById);

router.get('/Book/Author/:id',getAllBookByAuthor);

router.get('/Book/Name/:BName',getBookByName);

router.get('/Book/:BName/:Publisher',getBookByNameAndPublisher);

export default router