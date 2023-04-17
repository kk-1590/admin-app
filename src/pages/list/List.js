import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'
import './List.scss';

const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List