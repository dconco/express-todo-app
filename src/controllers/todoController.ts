import { Request, Response } from 'express'
import { useTodoList } from '../hooks/useTodoList'

const listTodos = (req: Request, res: Response): void => {
	const { getTodos } = useTodoList()
	res.json(getTodos())
}

export { listTodos }
