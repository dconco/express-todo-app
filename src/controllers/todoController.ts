import { Request, Response } from 'express'
import { getTodos } from '../hooks/useTodoList'

const listTodos = (req: Request, res: Response) => {
	res.json(getTodos())
}

export { listTodos }
