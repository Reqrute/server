import { Router } from "express";
import { getAuthor, createAuthor,getAuthorById,deleteAuthorById,UpdateAuthorById,getAuthorByAll,getAuthorReport} from "../controllers/author.controller";

const router = Router();

router.put('/Author/:id',UpdateAuthorById);

router.get('/Author',getAuthor);

router.post('/Author',createAuthor);

router.delete('/Author/:id',deleteAuthorById);

router.get('/Author/:id',getAuthorById);

router.get('/Author/Report/:id',getAuthorReport);

router.get('/Author/:SName/:FName/:LName',getAuthorByAll);

export default router