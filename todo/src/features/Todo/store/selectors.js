import { createSelector } from '@reduxjs/toolkit';
import { filterTodos } from '../utils/filterTodos/filterTodos';

export const todoListSelector = state => state.todo.list
export const todoListLoadingSelector = state => state.todo.listLoading
export const todoListErrorSelector = state => state.todo.listError
export const todoFilterSelector = state => state.todo.filter

export const todoListFilteredSelector = createSelector(
  todoListLoadingSelector,
  todoListErrorSelector,
  todoListSelector,
  todoFilterSelector,
  (loading, error, todos, filter) => {
    return {
      loading,
      error,
      todos: filterTodos(todos, filter),
      filter,
    }
  }
)
