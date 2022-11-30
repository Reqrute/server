import { Router } from "express";
import { getUserASub, createUserASub,deleteUserASubById,UpdateUserASubById,getAllUserASubByReadingRoomId,getAllUserASubByUserId,getAllUserASubBySubcribeId} from "../controllers/userAndSubcribe.js";

const router = Router();

router.put('/UserASub/:id',UpdateUserASubById);

router.get('/UserASub',getUserASub);

router.post('/UserASub',createUserASub);

router.delete('/UserASub/:id',deleteUserASubById);

router.get('/UserASub/ReadingRoom/:id',getAllUserASubByReadingRoomId);

router.get('/UserASub/User/:id',getAllUserASubByUserId);

router.get('/UserASub/Subcsribe/:id',getAllUserASubBySubcribeId);

export default router