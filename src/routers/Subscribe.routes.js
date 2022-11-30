import { Router } from "express";
import { getSubscribe, createSubscribe,getSubscribeById,deleteSubscribeById,UpdateSubscribeById,getAllSubscribeByLibraryId} from "../controllers/subscribe.controller";

const router = Router();

router.put('/Subscribe/:id',UpdateSubscribeById);

router.get('/Subscribe',getSubscribe);

router.post('/Subscribe',createSubscribe);

router.delete('/Subscribe/:id',deleteSubscribeById);

router.get('/Subscribe/:id',getSubscribeById);

router.get('/Subscribe/Library/:id',getAllSubscribeByLibraryId);

export default router