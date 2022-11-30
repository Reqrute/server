import { Router } from "express";
import { getGenre, getGenreById} from "../controllers/genre.controller";

const router = Router();

router.get('/Genre',getGenre);

router.get('/Genre/:id',getGenreById);

export default router