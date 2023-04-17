import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss';
import {userColumns,userRows} from '../../datatablesource.js';

const Datatable = () => {

    const actionColumn = [
        {
            field: "action", headerName :'Action', width:200, renderCell:() => {
                return (
                    <div className='cellAction'>
                        <div className='viewButton'>View</div>
                        <div className='deleteButton'>Delete</div>
                    </div>
                )
            }
        }
    ]
  return (
    <div className='datatable'>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        />
    </div>
  )
}

export default Datatable