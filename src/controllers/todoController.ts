import { Request, Response } from 'express'
import { Todo } from '../types/todoListInterface'
import { useTodoList } from '../hooks/useTodoList'
import { sendError, sendSuccess } from '../utils/response'

const { getTodos, getATodo, addTodo, updateTodo, deleteTodo } = useTodoList()

/**
 * LIST ALL TODO CONTROLLER
 */
const listTodosController = (_: Request, res: Response): void => {
	sendSuccess(res, getTodos())
}

/**
 * GET A PARTICULAR TODO CONTROLLER
 */
const getTodoController = ({ params }: Request, res: Response): void => {
	const id: number = Number(params.id as string)
	const todo: Todo | null = getATodo(id)

	if (todo) sendSuccess(res, todo)
	else sendError(res, 404, `TODO with an ID ${id} does not exist.`)
}

/**
 * CREATE NEW TODO CONTROLLER
 */
const createTodoController = ({ body }: Request, res: Response): void => {
	if (!body?.title) return sendError(res, 400, 'Title Required!')
	sendSuccess(res, addTodo(body.title))
}

/**
 * UPDATE TODO TITLE COMPLETED
 */
const updateTitleController = (
	{ body, query }: Request,
	res: Response
): void => {
	if (!body?.title) return sendError(res, 400, 'Title Required!')
	if (!query?.id) return sendError(res, 400, 'ID Required!')
	const id: number = Number(query.id as string)

	if (updateTodo(id, { title: body.title })) sendSuccess(res, 'Title Updated')
	else sendError(res, 404, `TODO with an ID ${id} does not exist.`)
}

/**
 * MARK TODO AS COMPLETED
 */
const markAsCompleted = ({ query }: Request, res: Response): void => {
	if (!query?.id) return sendError(res, 400, 'ID Required!')
	const id: number = Number(query.id as string)

	if (updateTodo(id, { completed: true })) sendSuccess(res, 'TODO Completed')
	else sendError(res, 404, `TODO with an ID ${id} does not exist.`)
}

/**
 * DELETE AN EXISTING TODO CONTROLLER
 */
const deleteTodoController = ({ query }: Request, res: Response): void => {
	if (!query?.id) return sendError(res, 400, 'ID Required!')
	const id: number = Number(query.id as string)

	if (deleteTodo(id)) sendSuccess(res, 'Deleted Successfully.')
	else sendError(res, 404, `TODO with an ID ${id} does not exist.`)
}

export {
	getTodoController,
	listTodosController,
	createTodoController,
	deleteTodoController,
	updateTitleController,
	markAsCompleted,
}
