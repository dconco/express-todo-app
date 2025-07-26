import { Router } from 'express'
import { listTodos } from '../controllers/todoController'

const router: Router = Router()

router.get('/', listTodos)

export default router
