import { TodoApi } from '../api/server'
import {
  getListLoading,
  getListSuccess,
  getListError,
  setEditItem,
  createItem,
  updateItem,
  removeItem as removeItemAction,
} from './reducer'

export const getList = () => {
  return (dispatch) => {
    dispatch(getListLoading())
    TodoApi
      .getList()
      .then((newList) => dispatch(getListSuccess(newList)))
      .catch((error) => dispatch(getListError(error.message)))
  }
}

export const saveItem = (todo) => {
  return async (dispatch) => {
    if (todo.id) {
      const newTodo = await TodoApi.update(todo.id, todo)

      dispatch(updateItem(newTodo))
    } else {
      const newTodo = await TodoApi.create(todo)

      dispatch(createItem(newTodo))
    }
  }
}

export const getOneItem = (id) => {
  return (dispatch) => {
    TodoApi.getOne(id).then((todo) => dispatch(setEditItem(todo)))
  }
};

export const removeItem = (id) => {
  return async (dispatch) => {
    await TodoApi.delete(id)

    dispatch(removeItemAction(id))
  }
};