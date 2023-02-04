import { Router , Request, Response} from "express";
import { jsonOla, jsonResponse } from "./Controllers/teste";
const router = Router()


router.get("/test", jsonResponse)
router.get('/olaa', jsonOla);

export default router;

