import React from 'react';
import { Link, IndexLink } from 'react-router';
import {slide as Menu} from 'react-burger-menu';
import { List, ListItem, ListItemContent } from 'react-mdl';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';



const SideBar = (props) => {
    
    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    };
    
    return (
            

        <Menu styles={styles}
        noOverlay id='push'
                    pageWrapId={'page-wrap'}
                    outerContainerId={'outer-container'}>
        <List>
                        <ListItem>
                            <ListItemContent icon="person">Dashboard</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="person">Community</ListItemContent>
                        </ListItem>
                        <ListItem>
                        <Button variant="contained" color="primary" onClick={e=>props.handle_logout(e)}>
      Hello World
    </Button>
                        </ListItem>
                    </List>
      </Menu>

    );
};

export default SideBar;

