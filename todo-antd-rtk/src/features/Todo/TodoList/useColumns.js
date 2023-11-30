import { Button, Checkbox, Space } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'
import { ErrorBoundary } from '../../../components/ErrorBoundary'
import { DeleteButton } from '../components/DeleteButton'

export function useColumns () {

  return [
    {
      title: 'Done',
      dataIndex: 'done',
      key: 'done',
      render: (done) => <Checkbox checked={done}></Checkbox>
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/todo/edit/${record.id}`}><Button>Edit</Button></Link>

          <ErrorBoundary>
            <DeleteButton id={record.id} />
          </ErrorBoundary>
        </Space>
      ),
    },
  ];
}

