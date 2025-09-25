import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Avatar,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

// Custom styled search bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  width: '100%',
}));

const TopNavbar = ({ userName = 'User' }) => {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#fff', color: 'inherit' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          noWrap
          sx={{ fontWeight: 600, fontFamily: "'Inter','Ubuntu','Nunito',sans-serif" }}
        >
          Ignite Dashboard
        </Typography>

        <Search sx={{ flex: 1, mx: 4, maxWidth: 400 }}>
          <SearchInput placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            Welcome back {userName}
          </Typography>
          <Avatar sx={{ bgcolor: 'primary.main' }}>{userName[0]}</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
