import decode from 'jwt-decode';

class AuthService {
    // get user data from JSON web token by decoding it
    getProfile() {
      return decode(this.getToken());
    }
  
    // checks if token exists and if it is expired
    loggedIn() {
      const token = this.getToken();
      return token && !this.isTokenExpired(token) ? true : false;
    }
    //removes token from local storage if expired
    isTokenExpired(token) {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem('id_token');
        return true
      }
      return false;
    }
  
    getToken() {
      // Retrieves the user token from localStorage
      return localStorage.getItem('id_token');
    }
  
    login(idToken) {
      // Saves user token to localStorage and reloads the application for logged in status to take effect
      localStorage.setItem('id_token', idToken);
      window.location.reload();
    }
  
    logout() {
      // Clear user token and profile data from localStorage and reloads the application for logged out status to take effect
      localStorage.removeItem('id_token');
      window.location.reload();
    }
  }
  
  export default new AuthService();
