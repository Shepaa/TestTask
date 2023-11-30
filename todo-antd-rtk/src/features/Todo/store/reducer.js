import { createSlice } from '@reduxjs/toolkit'
import { FILTERS } from '../utils/filterTodos/constants'

const DEFAULT_TODO = {
  title: '',
  done: false,
}

const initialState = {
  filter: FILTERS.ALL,
  editingTodo: DEFAULT_TODO,
  list: [],
  listLoading: false,
  listError: '',
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload
    },
    getListLoading: (state) => {
      state.listLoading = true
      state.listError = ''
    },
    getListSuccess: (state, { payload }) => {
      state.list = payload
      state.listLoading = false
    },
    getListError: (state, { payload }) => {
      state.listLoading = false
      state.listError = payload
    },
    setEditItem: (state, { payload }) => {
      state.editingTodo = payload
    },
    removeItem: (state, { payload }) => {
      state.list = state.list.filter((todo) => todo.id !== payload)
    },
    createItem: (state, { payload }) => {
      state.editingTodo = { ...DEFAULT_TODO }
      state.list = [...state.list, payload]
    },
    updateItem: (state, { payload }) => {
      state.editingTodo = DEFAULT_TODO
      state.list = state.list.map((todo) => todo.id === payload.id ? payload : todo)
    }
  },
})

export const action = todoSlice.actions
export default todoSlice.reducer

export const {
  getListLoading,
  getListSuccess,
  getListError,
  setEditItem,
  removeItem,
  createItem,
  updateItem,
  setFilter,
} = todoSlice.actions