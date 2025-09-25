import React from 'react';
import { CircularProgress, Box, Skeleton } from '@mui/material';

export const Spinner = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 100 }}>
    <CircularProgress />
  </Box>
);

export const SkeletonLoader = ({ height = 40, width = '100%' }) => (
  <Skeleton variant="rectangular" height={height} width={width} />
);
