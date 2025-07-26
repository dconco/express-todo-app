import { Todo, TodoListOutput } from '../types/todoListInterface'
import useTodoStorage from './useTodoStorage'

const todos: Todo[] = useTodoStorage()

export const useTodoList = (): TodoListOutput => {
	const getTodos = (): Todo[] => todos

	const getATodo = (id: number): Todo | null => {
		const index = todos.findIndex(todo => todo.id === id)
		if (index !== -1) {
			return todos[index]
		}
		return null
	}

	const addTodo = (title: string): Todo => {
		const newTodo = { id: todos.length + 1, title, completed: false }
		todos.push(newTodo)
		return newTodo
	}

	const updateTodo = (id: number, updates: Partial<Todo>): boolean => {
		const index = todos.findIndex(todo => todo.id === id)
		if (index !== -1) {
			todos[index] = { ...todos[index], ...updates }
			return true
		}
		return false
	}

	const deleteTodo = (id: number): boolean => {
		const index = todos.findIndex(todo => todo.id === id)
		if (index !== -1) {
			todos.splice(index, 1)[0]
			return true
		}
		return false
	}

	return { getTodos, getATodo, addTodo, updateTodo, deleteTodo }
}
