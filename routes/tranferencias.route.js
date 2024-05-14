import { Router } from "express";
import { transferenciaController } from "../controllers/transferencia.controller.js";


const router = Router()

router.get('/transferencias', transferenciaController.allTransfers)
router.post('/transferencia', transferenciaController.newTransfer)


export default router