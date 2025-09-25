import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const InfoCard = ({ title, value, icon }) => (
  <Card sx={{ minWidth: 200, m: 2 }}>
    <CardContent>
      {icon && <span style={{ float: 'right' }}>{icon}</span>}
      <Typography variant="h6" color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4" component="div">
        {value}
      </Typography>
    </CardContent>
  </Card>
);

export default InfoCard;
