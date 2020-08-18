import React from 'react';
import classes from './Nevigationitems.css';
import NevigationItem from './NevigationItem/Nevigationitem';

const nevigationItems = props => (
    <ul className={classes.NevigationItems}>
        <NevigationItem link="/" active>Burger Builder</NevigationItem>
        <NevigationItem link="/">Checkout</NevigationItem>
    </ul>
);

export default nevigationItems;