import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';





export default class ButtonLogout extends React.Component {
render()
{
    return(
<div>
<Button variant="contained" color="primary" onClick={e=>this.props.handle_logout(e)}>
      Hello World
    </Button>
    </div>
    )
}
}


ButtonLogout.propTypes = {
    handle_logout: PropTypes.func.isRequired
  };