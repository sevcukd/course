import {Router} from "express"
import Controller from "./controller.js";
import auth from "../../middlewares/auth.js";

const router = Router()

router.post("/", auth, Controller.create)

router.get("/", Controller.getAll)

router.get("/:id", Controller.getOne)

router.put("/:id", Controller.update)

router.delete("/:id", Controller.destroy)

export default router