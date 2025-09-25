import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Box,
  Paper,
} from '@mui/material';

const SideNav = () => {
  const items = ['Users', 'USSD', 'Revenue', 'Sensors'];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 220,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 220,
          boxSizing: 'border-box',
          p: 2,
          bgcolor: '#fff',
          boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {items.map((text) => (
            <Paper
              key={text}
              elevation={2}
              sx={{ mb: 2, borderRadius: 2, overflow: 'hidden' }}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Paper>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SideNav;
