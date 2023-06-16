import React, { useState } from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material';
import AppHeader from './components/AppHeader';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';

function App() {
    return (
        <React.Fragment>
            
            <NavBar />
            <Box sx={styles.container}>
                <BrowserRouter>
                    <SideBar />
                    <Box
                        component={'main'}
                        sx={styles.mainSection}
                    >
                        <AppRoutes />
                    </Box>
                </BrowserRouter>
            </Box>
        
        </React.Fragment>
    )
}

/**
 * @type {import('@mui/material').SxProps}
 */

const styles = {
  container: {
    display: 'flex',
    bgcolor: '#FFFFFF',
    height: 'calc(100% - 64px)'
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  }
}

export default App;
