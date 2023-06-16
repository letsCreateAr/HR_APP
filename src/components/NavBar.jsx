import React from "react";
import { AppBar, Badge, Box, Typography, IconButton, Toolbar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
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
            <nav class="flex justify-between py-3 bg-white backdrop-blur-none shadow-sm w-full fixed top-0 left-0 right-0 z-10">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <img class="pl-8 mr-2" viewBox="0 0 54 54" src="./src/assets/SPACOLOGO-SMALL.png" width="168" height="47"></img>
                </div>

                <div class="items-center flex md:flex md:flex-grow flex-row justify-end">
                    <span class="font-semibold text-xl tracking-tight" style={{paddingLeft: '30px', fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif', fontSize: '24px', color : 'black'}}>Spaco Employee Management</span>
                </div>

                <div class="items-center flex md:flex md:flex-grow flex-row justify-end pr-8">
                    <IconButton 
                        aria-haspopup="true"
                        onClick={handleMenu}
                        style={{color: 'black'}}>
                        <LogoutIcon />
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
                    >
                    </Menu>
                </div>
            </nav>
        </Toolbar>
    )
}

export default NavBar;