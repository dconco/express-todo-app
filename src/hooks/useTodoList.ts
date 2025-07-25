import { Todo } from '../types/todoListInterface'

const generateTodos = (count: number = 10): Todo[] =>
	Array.from({ length: count }, (_, i) => ({
		id: i + 1,
		title: `Todo ${i + 1}`,
		completed: Math.random() < 0.5,
	}))

let todos: Todo[] = generateTodos()

export const useTodoList = () => {
  const getTodos = () => todos;

  const addTodo = (title: string) => {
    const newTodo = { id: Date.now(), title, completed: false };
    todos.push(newTodo);
    return newTodo;
  };

  const updateTodo = (id: number, updates: Partial<Todo>) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos[index] = { ...todos[index], ...updates };
      return todos[index];
    }
    return null;
  };

  const deleteTodo = (id: number) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      return todos.splice(index, 1)[0];
    }
    return null;
  };

  return { getTodos, addTodo, updateTodo, deleteTodo };
};