import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const UpperBar = () =>
{ 
return (
<div>
<AppBar position="static" >
<Toolbar>
    <Typography variant='title' color='inherit'>
    Lap sensor
    </Typography>
    </Toolbar>
    </AppBar>
</div>
)

}


export default UpperBar;