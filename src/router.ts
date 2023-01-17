import { Router , Request, Response} from "express";
import { jsonOla, jsonResponse } from "./Controllers/teste";
const router = Router()


router.get("/test", jsonResponse)
router.post('/olaa', jsonOla);

export default router;

