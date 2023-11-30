import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from 'antd'
import { FILTERS } from './constants'
import { setFilter } from '../../store/reducer'
import { useDispatch, useSelector } from 'react-redux'
import { todoFilterSelector } from '../../store/selectors'

export function Filters () {
  const dispatch = useDispatch()
  const selectedFilter = useSelector(todoFilterSelector)
  let [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get('filter')


  useEffect(() => {
    if (filter) {
      dispatch(setFilter(filter))
    }
  }, [filter])

  const onFilterBtnClick = (filter) => {
    setSearchParams(`filter=${filter}`)
  }

  const isActive = filter => filter === selectedFilter

  return (
    <div style={{ marginTop: '20px' }}>
      <Button
        disabled={isActive(FILTERS.ALL)}
        onClick={() => onFilterBtnClick(FILTERS.ALL)}
      >
        All
      </Button>
      <Button
        disabled={isActive(FILTERS.ACTIVE)}
        onClick={() => onFilterBtnClick(FILTERS.ACTIVE)}
        style={{ marginLeft: '10px' }}
      >
        Active
      </Button>
      <Button
        disabled={isActive(FILTERS.DONE)}
        onClick={() => onFilterBtnClick(FILTERS.DONE)}
        style={{ marginLeft: '10px' }}
      >
        Done
      < /Button>
    </div>
  )
}