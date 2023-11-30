import { store } from './store'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { Home } from './features/Home'
import { TodoApp } from './features/Todo'
import { About } from './features/About'
import { NotFound } from './features/NotFound'
import { Provider } from 'react-redux'
import React from 'react'

export function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo/*" element={<TodoApp />} />
            <Route path="/about" element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </Provider>
  )
}
