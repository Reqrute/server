import { Router } from "express";
import { getClient, createClient,getClientById,deleteClientById,UpdateClientById,getClientByFIO} from "../controllers/client.controller";

const router = Router();

router.put('/Client/:id',UpdateClientById);

router.get('/Client',getClient);

router.post('/Client',createClient);

router.delete('/Client/:id',deleteClientById);

router.get('/Client/:id',getClientById);

router.get('/Client/:SName/:FName/:LName',getClientByFIO);

export default router