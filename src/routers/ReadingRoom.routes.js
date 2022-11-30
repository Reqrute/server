import { Router } from "express";
import { getReadingRoom, createReadingRoom,getReadingRoomById,deleteReadingRoomById,UpdateReadingRoomById,getAllReadingRoomByLibraryId} from "../controllers/readingRoom.controller";

const router = Router();

router.put('/ReadingRoom/:id',UpdateReadingRoomById);

router.get('/ReadingRoom',getReadingRoom);

router.post('/ReadingRoom',createReadingRoom);

router.delete('/ReadingRoom/:id',deleteReadingRoomById);

router.get('/ReadingRoom/:id',getReadingRoomById);

router.get('/ReadingRoom/Library/:id',getAllReadingRoomByLibraryId);

export default router