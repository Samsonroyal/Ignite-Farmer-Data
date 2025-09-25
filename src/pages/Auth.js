import React, { useState } from 'react';
import { AuthForm } from '../components/layout';
import {
  Box,
  Typography,
  Button,
  Divider,
  Paper,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const Auth = ({ onAuth }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [type, setType] = useState<'login' | 'signup'>('login');

  const handleSubmit = async (data) => {
    setLoading(true);
    setError('');
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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(249,250,251,0.6)',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: 2,
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontFamily: "'Inter','Ubuntu','Nunito',sans-serif" }}
          >
            {type === 'signup' ? 'Create your account' : 'Sign in'}
          </Typography>
        </Box>

        <AuthForm onSubmit={handleSubmit} loading={loading} error={error} type={type} />

        {type === 'login' && (
          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 1, color: 'primary.main', cursor: 'pointer' }}
          >
            Forgot your password?
          </Typography>
        )}

        <Divider sx={{ my: 3 }}>or</Divider>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{ mb: 2, textTransform: 'none' }}
        >
          Sign in with Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<FacebookIcon />}
          sx={{ textTransform: 'none' }}
        >
          Sign in with Facebook
        </Button>

        <Typography align="center" sx={{ mt: 3 }}>
          {type === 'login' ? (
            <>
              Don’t have an account?{' '}
              <Button
                variant="text"
                size="small"
                onClick={() => setType('signup')}
                sx={{ textTransform: 'none' }}
              >
                Sign up
              </Button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <Button
                variant="text"
                size="small"
                onClick={() => setType('login')}
                sx={{ textTransform: 'none' }}
              >
                Sign in
              </Button>
            </>
          )}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Auth;
