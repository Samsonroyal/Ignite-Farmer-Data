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
    <Box 
      sx={{ 
        mt: 8, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        minHeight: '100vh',
        px: 2
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontFamily: "'Instrument Inter', 'Inter', 'Ubuntu', 'Nunito', sans-serif",
          fontWeight: 400,
          mb: 4,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          color: 'text.primary',
          letterSpacing: '-0.02em'
        }}
      >
        {type === 'signup' ? 'Create your account' : 'Sign in to Ignite Farmer'}
      </Typography>
      
      <Box sx={{ width: '100%', maxWidth: '450px' }}>
        <AuthForm 
          onSubmit={handleSubmit} 
          loading={loading} 
          error={error} 
          type={type} 
        />
        
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#6b7280',
              mb: 2,
              fontFamily: "'Instrument Inter', 'Inter', 'Ubuntu', 'Nunito', sans-serif",
              fontSize: '14px'
            }}
          >
            {type === 'login' ? "Don't have an account?" : "Already have an account?"}
          </Typography>
          
          <Button
            variant="text"
            size="medium"
            onClick={() => setType(type === 'login' ? 'signup' : 'login')}
            sx={{ 
              textTransform: 'none',
              fontFamily: "'Instrument Inter', 'Inter', 'Ubuntu', 'Nunito', sans-serif",
              fontWeight: 500,
              color: '#000',
              fontSize: '14px',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                transform: 'translateY(-1px)'
              },
              transition: 'all 0.2s ease-in-out'
            }}
          >
            {type === 'login' ? 'Create an account' : 'Sign in instead'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Auth;