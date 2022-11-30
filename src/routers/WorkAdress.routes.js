import { Router } from "express";
import { getWorkAddress, createWorkAddress,getWorkAddressById,deleteWorkAddressById,UpdateWorkAddressById,getWorkAddressByAll} from "../controllers/workAdress.controller";

const router = Router();

router.put('/WorkAddress/:id',UpdateWorkAddressById);

router.get('/WorkAddress',getWorkAddress);

router.post('/WorkAddress',createWorkAddress);

router.delete('/WorkAddress/:id',deleteWorkAddressById);

router.get('/WorkAddress/:id',getWorkAddressById);

export default router