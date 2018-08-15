import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import { withStyles } from '@material-ui/core/styles';


import Readings from '../stores/Readings'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const ReadingsTable = () =>
{
return(
    <div>
    <Paper >
    <Table>
      <TableHead>
        <TableRow>
          <CustomTableCell>Name</CustomTableCell>
          <CustomTableCell>Location</CustomTableCell>
          <CustomTableCell numeric>Value</CustomTableCell>
          <CustomTableCell>Created at</CustomTableCell>
          <CustomTableCell numeric>Sensor</CustomTableCell>
          <CustomTableCell numeric>Id</CustomTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Readings.all_users.map(reading => {
          return (
            <TableRow key={reading.id}>
              <TableCell component="th" scope="row">
                {reading.name}
              </TableCell>
              <TableCell>{reading.location}</TableCell>
              <TableCell numeric>{reading.value}</TableCell>
              <TableCell>{reading.created_at}</TableCell>
              <TableCell numeric>{reading.gsensor}</TableCell>
              <TableCell numeric>{reading.id}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
  </div>
)
}

export default ReadingsTable;