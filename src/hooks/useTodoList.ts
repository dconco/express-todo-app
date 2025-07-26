import { Todo, TodoListOutput } from '../types/todoListInterface'

const generateTodos = (count: number = 10): Todo[] =>
	Array.from({ length: count }, (_, i) => ({
		id: i + 1,
		title: `Todo ${i + 1}`,
		completed: Math.random() < 0.5,
	}))

let todos: Todo[] = generateTodos()

export const useTodoList = (): TodoListOutput => {
	const getTodos = (): Todo[] => todos

	const addTodo = (title: string): Todo => {
		const newTodo = { id: Date.now(), title, completed: false }
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

	return { getTodos, addTodo, updateTodo, deleteTodo }
}
