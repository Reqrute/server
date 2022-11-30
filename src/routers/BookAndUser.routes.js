import { Router } from "express";
import { getBookAUs, createBookAUs,deleteBookAUsById,UpdateBookAUsById,getAllBookAUsByBookId,getAllBookAUsByUserId,getAllBookAUsByReadRoomId} from "../controllers/bookAndUser.controller";

const router = Router();

router.put('/BookAndUser/:id',UpdateBookAUsById);

router.get('/BookAndUser',getBookAUs);

router.post('/BookAndUser',createBookAUs);

router.delete('/BookAndUser/:id',deleteBookAUsById);

router.get('/BookAndUser/Book/:id',getAllBookAUsByBookId);

router.get('/BookAndUser/User/:id',getAllBookAUsByUserId);

router.get('/BookAndUser/ReadRoom/:id',getAllBookAUsByReadRoomId);

export default router