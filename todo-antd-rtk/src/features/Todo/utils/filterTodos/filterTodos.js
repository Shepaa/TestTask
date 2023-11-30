export function filterTodos (todos, filter) {
  if (filter === 'active') {
    return todos.filter(todo => !todo.done)
  } else if (filter === 'done') {
    return todos.filter(todo => todo.done)
  } else {
    return todos
  }
}
