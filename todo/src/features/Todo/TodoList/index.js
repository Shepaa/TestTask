import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Filters } from '../utils/filterTodos/Filters'
import { Page } from '../../../components/Page'
import { Alert, Button, Table } from 'antd'
import { useColumns } from './useColumns'
import { getList } from '../store/thunks'
import { todoListFilteredSelector } from '../store/selectors'

export function TodoList () {
  const dispatch = useDispatch()
  const { loading, error, todos } = useSelector(todoListFilteredSelector)
  const columns = useColumns()

  useEffect(() => {
    dispatch(getList()) // get list from API
  }, [])

  return (
    <Page title="Todo List">
      <div style={{ marginBottom: '20px' }}>
        <Link to="/todo/edit">
          <Button>Add New</Button>
        </Link>
        <Filters/>
      </div>
      <Table
        rowKey="id"
        columns={columns}
        loading={loading}
        dataSource={todos}
        pagination={{ pageSize: 5 }}/>

      {error && <Alert message={error} type="error"/>}
    </Page>
  )
}
