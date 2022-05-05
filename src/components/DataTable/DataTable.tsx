
import React, {useState} from 'react';
import { DataGrid, GridColDef, GridSelectionModel, GridValueGetterParams } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { TurbineForm } from '../../components'; 
import { theme } from '../../Theme/themes'; 

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 , minWidth: 130 },
  {
    field: 'name',
    headerName: 'Turbine',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'number_of_blades',
    headerName: 'Number of Blades',
    width: 110,
    editable: true,
  },
  {
    field: 'rotor_position',
    headerName: 'Rotor Position',
    width: 110,
    editable: true,
  },
  {
    field: 'wind_direction',
    headerName: 'Wind Direction',
    width: 110,
    editable: true,
  },
  {
    field: 'dimensions',
    headerName: 'Dimensions',
    width: 110,
    editable: true,
  },
  {
    field: 'weight',
    headerName: 'Weight',
    width: 110,
    editable: true,
  },
  {
    field: 'blade_material',
    headerName: 'Blade MAterial',
    width: 110,
    editable: true,
  },
  {
    field: 'wind_energy_converted',
    headerName: 'Wind Energy Converted',
    width: 110,
    editable: true,
  },
  {
    field: 'generator',
    headerName: 'Generator',
    width: 110,
    editable: true,
  }
];

interface gridData{
  data:{
    id?:string;
  }
}



export const DataTable = () => {
  let { turbineData, getData } = useGetData();
  let [open, setOpen] = useState(false); 
  let [gridData, setData] = useState<GridSelectionModel>([])

  let handleOpen = () => {
    setOpen(true);
  }

  let handleClose = () => {
    setOpen(false);
  }

  let deleteData = async () => {
    await serverCalls.delete(`${gridData[0]}`)
    getData(); 
  }

  console.log(gridData) 

    return (
      <div style={{ height: 400, width: '100%' }}>
          <h2>Turbines In Inventory</h2>
        <DataGrid
          rows={turbineData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={newSelectionModel => setData(newSelectionModel)}
          {...turbineData}
        />
        <Button onClick={handleOpen} variant='outlined' color='success'>Update</Button>
        <Button onClick={deleteData} variant='outlined' color='warning'>Delete</Button>
        {/* Popping Open the Dialog Box */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle id='form-dialog-title'>Update Turbine</DialogTitle>
          <DialogContent>
            <DialogContentText>Updating Turbine: {gridData[0]}</DialogContentText>
            <TurbineForm id={`${gridData[0]}`} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }