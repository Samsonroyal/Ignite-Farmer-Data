import React, { useState } from 'react';
import { AuthForm } from '../components/layout';
import { Box, Typography, Button } from '@mui/material';

const Auth = ({ onAuth }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [type, setType] = useState('login');

  const handleSubmit = async (data) => {
    setLoading(true);
    setError('');
    // Mock authentication logic
    setTimeout(() => {
      setLoading(false);
      if (data.email === 'user@example.com' && data.password === 'Password123!') {
        onAuth();
      } else {
        setError('Invalid credentials');
      }
    }, 1000);
  };

  return (
    <Box sx={{ mt: 8 }}>
      <Typography
        variant="h1"
        align="center"
        sx={{
          fontFamily: "'Instrument Inter', 'Inter', 'Ubuntu', 'Nunito', sans-serif",
          fontWeight: 600,
          mb: 4,
        }}
      >
        {type === 'signup' ? 'Create your account' : 'Sign in to Ignite Farmer'}
      </Typography>
      <AuthForm onSubmit={handleSubmit} loading={loading} error={error} type={type} />
      <Typography align="center" sx={{ mt: 2 }}>
        {type === 'login' ? (
          <span>
            Don't have an account?{' '}
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={() => setType('signup')}
              sx={{ textTransform: 'none' }}
            >
              Sign Up
            </Button>
          </span>
        ) : (
          <span>
            Already have an account?{' '}
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={() => setType('login')}
              sx={{ textTransform: 'none' }}
            >
              Sign In
            </Button>
          </span>
        )}
      </Typography>
    </Box>
  );
};

export default Auth;
