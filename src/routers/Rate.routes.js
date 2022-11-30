import { Router } from "express";
import { getRate, createRate,getRateById,deleteRateById,UpdateRateById} from "../controllers/rate.controller";

const router = Router();

router.put('/Rate/:id',UpdateRateById);

router.get('/Rate',getRate);

router.post('/Rate',createRate);

router.delete('/Rate/:id',deleteRateById);

router.get('/Rate/:id',getRateById);

export default router