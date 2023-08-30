'use client';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { DataGrid } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
const SheduleDoctor =  () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  function createData(id ,time, selected) {
    return { id, time, selected } ;
  }
  const Columns = [
    { field: 'monday', headerName: 'Monday', width: 70 },  
    { field: 'tuesday', headerName: 'Tuesday', width: 70 },  
    { field: 'tednesday', headerName: 'Wednesday', width: 70 },  
    { field: 'thursday', headerName: 'Thursday', width: 70 },  
    { field: 'friday', headerName: 'Friday', width: 70 },  
    { field: 'saturday', headerName: 'Saturday', width: 70 },  
    { field: 'sunday', headerName: 'Sunday', width: 70 },  
  ]
  const Timerows = [
    createData(1,'7:00 - 8:00', false),
    createData(2,'8:00 - 9:00', false),
    createData(3,'9:00 - 10:00', false),
    createData(4,'10:00 - 11:00', false),
    createData(4,'12:00 - 13:00', false),
    createData(5,'14:00 - 15:00', false),
    createData(6,'15:00 - 16:00', false),
    createData(7,'16:00 - 17:00', false),
  ];
  return(
    <TableContainer >
    <Table size='small' sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell><h3>Time/Day</h3></TableCell>
          <TableCell><h3>Monday</h3></TableCell>
          <TableCell><h3>Tuesday</h3></TableCell>
          <TableCell><h3>Wednesday</h3></TableCell>
          <TableCell><h3>Thursday</h3></TableCell>
          <TableCell><h3>Friday</h3></TableCell>
          <TableCell><h3>Saturday</h3></TableCell>
          <TableCell><h3>Sunday</h3></TableCell>
        </TableRow>          
      </TableHead>
      <TableBody>
        {Timerows.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            style={{width: '100%'}}
          >
            <TableCell component="th" scope="row">
              {row.time}
            </TableCell>
            <TableCell align="right"><Checkbox  icon={<CircleOutlinedIcon/>} checkedIcon={<CircleIcon/>}/></TableCell>
            <TableCell align="right"><Checkbox icon={<CircleOutlinedIcon/>} checkedIcon={<CircleIcon/>}/></TableCell>
            <TableCell align="right"><Checkbox icon={<CircleOutlinedIcon/>} checkedIcon={<CircleIcon/>}/></TableCell>
            <TableCell align="right"><Checkbox icon={<CircleOutlinedIcon/>} checkedIcon={<CircleIcon/>}/></TableCell>
            <TableCell align="right"><Checkbox icon={<CircleOutlinedIcon/>} checkedIcon={<CircleIcon/>}/></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    
  )
}


export default SheduleDoctor