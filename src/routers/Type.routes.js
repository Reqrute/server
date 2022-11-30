import { Router } from "express";
import { getType, getTypeById} from "../controllers/type.controller";

const router = Router();

router.get('/Type',getType);

router.get('/Type/:id',getTypeById);

export default router