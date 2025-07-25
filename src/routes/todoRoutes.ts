import { Router } from 'express'
import { listTodos } from '../controllers/todoController'

export const todoRoutes: string = 'Router()'

todoRoutes.get('/', listTodos)
