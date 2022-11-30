import { Router } from "express";
import { getBookARate, createBookARate,deleteBookARateById,UpdateBookARateById,getAllBookARateByBookId,getAllBookARateByUserId,getAllBookARateByRateId} from "../controllers/bookAndRate.controller";

const router = Router();

router.put('/BookARate/:id',UpdateBookARateById);

router.get('/BookARate',getBookARate);

router.post('/BookARate',createBookARate);

router.delete('/BookARate/:id',deleteBookARateById);

router.get('/BookARate/Book/:id',getAllBookARateByBookId);

router.get('/BookARate/User/:id',getAllBookARateByUserId);

router.get('/BookARate/Rate/:id',getAllBookARateByRateId);

export default router