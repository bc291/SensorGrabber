import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import Readings from '../stores/Readings'



const ReadingsTable = () =>
{
return(
    <div>
    <Paper >
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Location</TableCell>
          <TableCell numeric>Value</TableCell>
          <TableCell>Created at</TableCell>
          <TableCell numeric>Sensor</TableCell>
          <TableCell numeric>Id</TableCell>
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