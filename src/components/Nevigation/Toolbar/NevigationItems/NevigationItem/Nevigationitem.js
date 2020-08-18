import React from 'react';
import classes from './Nevigationitem.css';

const nevigationItem = props => (
    <li className={classes.NevigationItem}>
        <a href={props.link}
            className={props.active ? classes.active : null}
        >
        {props.children}
        </a>
    </li>
);

export default nevigationItem;