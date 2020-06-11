import axios from "axios";
import authHeader from './auth-header';

const AUTH_URL = "http://localhost:8081/blogs/auth/";
const USER_URL = "http://localhost:8081/blogs/users/";

class AuthService {
  login(username, password) {
    return axios
      .post(AUTH_URL + "login", {
        username,
        password
      })
      .then(response => {
        if (response.data && response.data.success === true) {
          localStorage.setItem("user", JSON.stringify(response.data.response));
        }

        return response.data.response;
      });
  }

  logout() {
    return axios.post(AUTH_URL + 'logout', {}, { 
      headers: authHeader() 
    })
    .then(response => {
      if (response.data && response.data.success === true) {
        localStorage.removeItem("user");
      }
    });
  }

  register(username, firstName, lastName, email, password) {
    return axios.post(USER_URL, {
      username,
      firstName,
      lastName,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();