import { Router , Request, Response} from "express";
import { jsonOla, jsonResponse } from "./Controllers/teste";
const router = Router()


router.post("/test", jsonResponse)
router.post('/olaa', jsonOla);

export default router;

