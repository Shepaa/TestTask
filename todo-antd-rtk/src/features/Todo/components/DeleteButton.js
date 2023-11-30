import { useDispatch } from 'react-redux'
import React from 'react'
import { removeItem } from '../store/thunks'
import { Button, Space, Typography } from 'antd'

export function DeleteButton ({ id }) {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const onDeleteBtnClick = async() => {
    setLoading(true)
    setError('')

    try {
      await dispatch(removeItem(id))
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Space>
      <Button
        onClick={onDeleteBtnClick}
        loading={loading}
        disabled={loading}
      >
        Delete
      </Button>
      <Typography.Text type="danger">{error}</Typography.Text>
    </Space>
  )
}