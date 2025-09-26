import React, { useState } from 'react';
import { AuthForm } from '../components/layout';
import { Box, Typography, Button, Alert } from '@mui/material';
import authService from '../api/authService';

const Auth = ({ onAuth }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [type, setType] = useState('login');

  const handleSubmit = async (data) => {
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      if (type === 'signup') {
        await authService.signup(data.email, data.password);
        setSuccess('Account created! Please check your email to verify your account before logging in.');
        setType('login'); // Switch to login form after successful signup
      } else {
        await authService.login(data.email, data.password);
        onAuth(); // Notify parent component that user is authenticated
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}
        
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