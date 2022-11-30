import { Router } from "express";
import { getAddress, createAddress,getAddressById,deleteAddressById,UpdateAddressById,getAddressByAll} from "../controllers/adress.controller";

const router = Router();

router.put('/Address/:id',UpdateAddressById);

router.get('/Address',getAddress);

router.post('/Address',createAddress);

router.delete('/Address/:id',deleteAddressById);

router.get('/Address/:id',getAddressById);

export default router