import React from 'react';
import axios from 'axios'
import styles from './LoggedOut.module.css'
import { useNavigate } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

function CreateUser() {
  const [formData, setFormData] = React.useState({
    username: '',
    first_name:'',
    last_name:'',
    email: '',
    password: '',
    confirm_password:'',
    phone_number:'',
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to create a new user
    axios
    .post('http://localhost:8000/signup/',formData)
    .then((response) => {
      // Handle the response from your Django API as needed
      navigate('/login')
      console.log(response.data)
    })
    .catch((error) => {
      console.error('Error:',error);
    });
  };
  const AlignInputs = `${styles.single_input} ${styles.align_inputs}`

  return (
    <div className={styles.wrapper}>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <input
            required
            className={styles.single_input}
            type="text"
            id="first_name"
            name="first_name"
            placeholder="First name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <input
            required
            className={styles.single_input}
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Last name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            required
            className={AlignInputs}
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
            className={AlignInputs}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            required
            className={AlignInputs}
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={formData.confirm_password}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            required
            className={AlignInputs}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            required
            className={AlignInputs}
            type="phone_number"
            id="phone_number"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.btn}>Signup</button>
      </form>
    </div>
  );
}

export default CreateUser;
