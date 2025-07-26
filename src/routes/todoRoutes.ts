import { Router } from 'express'
import {
   getTodoController,
	listTodosController,
	createTodoController,
	deleteTodoController,
	updateTitleController,
	markAsCompleted,
} from '../controllers/todoController'

const router: Router = Router()

router.get('/', listTodosController)
router.get('/:id', getTodoController)
router.post('/new', createTodoController)
router.patch('/update', updateTitleController)
router.patch('/completed', markAsCompleted)
router.delete('/delete', deleteTodoController)

export default router
