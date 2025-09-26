import api from './axios';

class AuthService {
  async signup(email, password, role = 'user') {
    try {
      const response = await api.post('/api/auth/signup', { 
        email, 
        password, 
        role 
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Signup failed');
    }
  }

  async login(email, password) {
    try {
      const response = await api.post('/api/auth/login', { 
        email, 
        password 
      });
      
      const { accessToken, refreshToken, role } = response.data;
      
      // Store tokens in localStorage
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
      localStorage.setItem('user_role', role);
      
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Login failed');
    }
  }

  async refreshToken() {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      if (!refreshToken) throw new Error('No refresh token available');

      const response = await api.post('/api/auth/refresh', { 
        refreshToken 
      });
      
      const { accessToken } = response.data;
      localStorage.setItem('access_token', accessToken);
      
      return response.data;
    } catch (error) {
      // If refresh fails, clear tokens and redirect to login
      this.logout();
      throw new Error('Session expired. Please login again.');
    }
  }

  async verifyEmail(token) {
    try {
      const response = await api.get(`/api/auth/verify?token=${token}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.error || 'Email verification failed');
    }
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_role');
  }

  isAuthenticated() {
    return !!localStorage.getItem('access_token');
  }

  getUserRole() {
    return localStorage.getItem('user_role');
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }
}

const authService = new AuthService();
export default authService;
