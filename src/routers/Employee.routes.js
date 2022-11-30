import { Router } from "express";
import { getEmployer, createEmployer,deleteEmployerById,UpdateEmployerById,getAllEmployerByReadRoomId,getAllEmployerById} from "../controllers/employee.controller";

const router = Router();

router.put('/Employer/:id',UpdateEmployerById);

router.get('/Employer',getEmployer);

router.get('/Employer/:id',getAllEmployerById);

router.post('/Employer',createEmployer);

router.delete('/Employer/:id',deleteEmployerById);

router.get('/Employer/ReadRoom/:id',getAllEmployerByReadRoomId);

export default router