type Todo = {
	id: number
	title: string
	completed: boolean
}

interface TodoListOutput {
	getTodos: () => Todo[]
	getATodo: (id: number) => Todo | null
	addTodo: (title: string) => Todo
	updateTodo: (id: number, updates: Partial<Todo>) => boolean
	deleteTodo: (id: number) => boolean
}

export { Todo, TodoListOutput }
