import React from 'react'
import { EditForm } from './TodoForm'
import { TodoList } from './TodoList'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '../NotFound'

export function TodoApp () {
  return (
    <Routes>
      <Route path="/list" element={<TodoList/>}/>
      <Route path="/edit" element={<EditForm/>}/>
      <Route path="/edit/:todoId" element={<EditForm/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}