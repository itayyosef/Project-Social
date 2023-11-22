import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './LoggedOut.module.css';
import Cookies from 'js-cookie';

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/login/', formData)
      .then((response) => {
        const token = response.data.token;

        // Save the token as a cookie with an expiration time (e.g., 1 day)
        Cookies.set('token', token, { expires: 1 });

        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className={styles.wrapper}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            required
            className={styles.single_input}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            required
            className={styles.single_input}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;