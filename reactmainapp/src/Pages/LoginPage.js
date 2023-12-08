import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './LoggedOut.module.css';

function LoginPage() {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login/', formData, {
    withCredentials: true,
    headers: {
    'X-CSRFToken': getCookie('csrftoken'),
    },
    });
      const sessionID = response.data.session_id;
      const csrfToken = response.data.csrftoken;

      // Save session ID and CSRF token as cookies using document.cookie
      document.cookie = `sessionID=${sessionID}; path=/`;
      document.cookie = `csrftoken=${csrfToken}; path=/`;

      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
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