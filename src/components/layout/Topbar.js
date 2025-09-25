import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Topbar = ({ onMenuClick }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Ignite Farmer Dashboard
      </Typography>
      <IconButton color="inherit">
        <AccountCircle />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Topbar;
