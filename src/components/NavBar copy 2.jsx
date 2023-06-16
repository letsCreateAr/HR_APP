import React from "react";
import { AppBar, Badge, Box, Typography, IconButton, Toolbar } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { Fragment } from 'react'

function NavBar() {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Toolbar>
            <nav class="flex justify-between w-screen py-3 bg-white backdrop-blur-none shadow-sm w-full fixed top-0 left-0 right-0 z-10">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <img class="pl-5 mr-2" viewBox="0 0 54 54" src="https://spaco-inc.com/wp-content/uploads/2022/06/SPACOLOGO-MAIN.png" width="153" height="52"></img>
                    <h1 class="font-semibold text-xl tracking-tight" style={{paddingLeft: '30px', fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif', fontSize: '20px', color : 'black'}}>Spaco Employee Management</h1>
                </div>

                <div class="pr-5 flex md:flex md:flex-grow flex-row justify-end space-x-1">
                    <IconButton 
                        aria-haspopup="true"
                        onClick={handleMenu}
                        style={{color: 'black'}}>
                        <AccountCircleIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                </div>
            </nav>
        </Toolbar>
    )
}

export default NavBar;