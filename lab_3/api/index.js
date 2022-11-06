import { Router } from "express"
import UserRouter from "./user/index.js"

const router = Router()

router.use("/users", UserRouter)

export default router