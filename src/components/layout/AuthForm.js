import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  InputAdornment, 
  IconButton,
  Paper,
  Divider,
  Alert
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Must contain an uppercase letter')
    .matches(/[a-z]/, 'Must contain a lowercase letter')
    .matches(/[0-9]/, 'Must contain a number')
    .matches(/[@$!%*?&#]/, 'Must contain a special character')
    .required('Password is required'),
});

const AuthForm = ({ onSubmit, loading, error, type = 'login' }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Paper
      elevation={0}
      sx={{
        backgroundColor: 'white',
        borderRadius: '16px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        overflow: 'hidden',
        maxWidth: 420,
        mx: 'auto'
      }}
    >
      {/* Header */}
      <Box sx={{ p: 4, pb: 2, textAlign: 'center' }}>
        <Box sx={{ mb: 2 }}>
          <Box
            sx={{
              width: 48,
              height: 48,
              backgroundColor: '#000',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 2
            }}
          >
            <Typography
              sx={{
                color: 'white',
                fontSize: '18px',
                fontWeight: 600,
                fontFamily: "'Instrument Inter', 'Inter', sans-serif"
              }}
            >
              IF
            </Typography>
          </Box>
        </Box>
        
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: '#111827',
            mb: 1,
            fontFamily: "'Instrument Inter', 'Inter', sans-serif",
            fontSize: '24px'
          }}
        >
          {type === 'signup' ? 'Create Your Account' : 'Welcome Back'}
        </Typography>
        
        <Typography
          variant="body2"
          sx={{
            color: '#6b7280',
            fontFamily: "'Instrument Inter', 'Inter', sans-serif",
            fontSize: '14px'
          }}
        >
          {type === 'signup' 
            ? 'Join Ignite Farmer to get started' 
            : 'Sign in to continue to Ignite Farmer'
          }
        </Typography>
      </Box>

      <Divider sx={{ mx: 4, borderColor: '#f3f4f6' }} />

      {/* Form Content */}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ p: 4, pt: 3 }}
      >
        {error && (
          <Alert 
            severity="error" 
            sx={{ 
              mb: 3, 
              borderRadius: '8px',
              fontFamily: "'Instrument Inter', 'Inter', sans-serif"
            }}
          >
            {error}
          </Alert>
        )}

        <TextField
          label="Email Address"
          fullWidth
          margin="normal"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: '#9ca3af', fontSize: '20px' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              backgroundColor: '#fafafa',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
              '&.Mui-focused': {
                backgroundColor: 'white',
              }
            },
            '& .MuiInputLabel-root': {
              fontFamily: "'Instrument Inter', 'Inter', sans-serif",
              fontSize: '14px'
            },
            '& .MuiOutlinedInput-input': {
              fontFamily: "'Instrument Inter', 'Inter', sans-serif",
              fontSize: '14px'
            }
          }}
        />

        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ color: '#9ca3af', fontSize: '20px' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton 
                  onClick={() => setShowPassword((show) => !show)} 
                  edge="end"
                  size="small"
                  sx={{ color: '#9ca3af' }}
                >
                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            mb: 3,
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              backgroundColor: '#fafafa',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
              '&.Mui-focused': {
                backgroundColor: 'white',
              }
            },
            '& .MuiInputLabel-root': {
              fontFamily: "'Instrument Inter', 'Inter', sans-serif",
              fontSize: '14px'
            },
            '& .MuiOutlinedInput-input': {
              fontFamily: "'Instrument Inter', 'Inter', sans-serif",
              fontSize: '14px'
            }
          }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
          sx={{
            mt: 1,
            py: 1.5,
            backgroundColor: '#000',
            borderRadius: '8px',
            textTransform: 'none',
            fontFamily: "'Instrument Inter', 'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: 500,
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#1f2937',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              transform: 'translateY(-1px)'
            },
            '&:disabled': {
              backgroundColor: '#9ca3af',
              color: 'white'
            },
            transition: 'all 0.2s ease-in-out'
          }}
        >
          {loading 
            ? 'Please wait...' 
            : type === 'signup' 
              ? 'Create Account' 
              : 'Sign In'
          }
        </Button>

        {type === 'login' && (
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button
              variant="text"
              size="small"
              sx={{
                textTransform: 'none',
                color: '#6b7280',
                fontSize: '13px',
                fontFamily: "'Instrument Inter', 'Inter', sans-serif",
                '&:hover': {
                  color: '#000',
                  backgroundColor: 'transparent'
                }
              }}
            >
              Forgot your password?
            </Button>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default AuthForm;