import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/logo.png'
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    
  return (
    <>
        <AppBar position="static" className={classes.appBar} style={{ background: '#efc2ff'}}> {/* Makes sure the navbar is static and changes its colour */}
            <Toolbar>
                <Typography variant="h5" className={classes.title} color="black"> {/* This creates a simple title inside of the navbar */}
                    <img src={logo} alt="Veopolis" height="40px" className={classes.image} /> {/* adds a logo next to the title */}
                    Veopolis
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}> {/* multiple buttons within the navbar that would take you to a different page */}
                    <Button color="black">Home</Button>
                    <Button color="black">Women</Button>
                    <Button color="black">Children</Button>
                    <Button color="black">Men</Button>
                    <Button color="black">Food</Button>
                    <Button color="black">Beauty</Button>
                    <IconButton aria-label="Show cart items" color="black"> 
                        <Badge badgeContent={3} color="secondary"> {/* shopping cart icon that would show the user's cart and the number of items that it contains */}
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar