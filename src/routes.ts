import { Router } from "express";
import { adaptRoute } from "./adapters";
import { makeLoadTicketController } from "./useCases/load-ticket";

const router = Router();

router.get("/boleto/:code", adaptRoute(makeLoadTicketController));

export { router };
