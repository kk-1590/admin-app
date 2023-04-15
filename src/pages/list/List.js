import React from 'react'
import { Outlet } from 'react-router-dom'

const List = () => {
  return (
    <div>
      List
      <Outlet />
    </div>
  )
}

export default List