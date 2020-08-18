import React from 'react';
import classes from './Layout.css';
import Auxillary from '../../hoc/auxillary';
import Toolbar from '../Nevigation/Toolbar/Toolbar'

const layout = (props) => (
    <Auxillary>
    <Toolbar />
    <main className={classes.Container}>
        {props.children}   
    </main>
    </Auxillary>
);

export default layout;